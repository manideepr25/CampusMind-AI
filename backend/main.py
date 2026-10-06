import os
import jwt

from datetime import datetime, timedelta, timezone

from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware

from pwdlib import PasswordHash
from dotenv import load_dotenv

from database import get_connection
from schemas import UserCreate, UserLogin
from rag_pipeline import ask_campusmind


load_dotenv()


app = FastAPI()


JWT_SECRET = os.getenv("JWT_SECRET")

password_hash = PasswordHash.recommended()

security = HTTPBearer()


# ==============================
# JWT TOKEN
# ==============================

def create_access_token(user_id, email, role):
    payload = {
        "user_id": user_id,
        "email": email,
        "role": role,
        "exp": datetime.now(timezone.utc) + timedelta(hours=1),
    }

    token = jwt.encode(
        payload,
        JWT_SECRET,
        algorithm="HS256",
    )

    return token


# ==============================
# VERIFY TOKEN
# ==============================

def verify_token(token):
    try:
        payload = jwt.decode(
            token,
            JWT_SECRET,
            algorithms=["HS256"],
        )

        return payload

    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=401,
            detail="Token has expired",
        )

    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=401,
            detail="Invalid token",
        )


# ==============================
# CORS
# ==============================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==============================
# HOME
# ==============================

@app.get("/")
def home():
    return {
        "message": "Welcome to CampusMind AI"
    }


# ==============================
# DATABASE TEST
# ==============================

@app.get("/db-test")
def database_test():

    try:
        conn = get_connection()
        conn.close()

        return {
            "message": "Database connection successful"
        }

    except Exception as e:

        return {
            "error": str(e)
        }


# ==============================
# REGISTER
# ==============================

@app.post("/register")
def register_user(user: UserCreate):

    try:

        conn = get_connection()
        cursor = conn.cursor()

        # Check whether email already exists
        cursor.execute(
            """
            SELECT id
            FROM users
            WHERE email = %s
            """,
            (user.email,),
        )

        existing_user = cursor.fetchone()

        if existing_user is not None:

            cursor.close()
            conn.close()

            raise HTTPException(
                status_code=400,
                detail="Email already registered",
            )

        # Allow only student or faculty registration
        if user.role not in ["student", "faculty"]:

            cursor.close()
            conn.close()

            raise HTTPException(
                status_code=400,
                detail="Invalid registration role",
            )

        # Create user
        cursor.execute(
            """
            INSERT INTO users
            (
                name,
                email,
                password_hash,
                role
            )
            VALUES (%s, %s, %s, %s)
            RETURNING id, name, email, role
            """,
            (
                user.name,
                user.email,
                password_hash.hash(user.password),
                user.role,
            ),
        )

        new_user = cursor.fetchone()

        conn.commit()

        cursor.close()
        conn.close()

        return {
            "message": "User registered successfully",

            "user": {
                "id": new_user[0],
                "name": new_user[1],
                "email": new_user[2],
                "role": new_user[3],
            },
        }

    except HTTPException:
        raise

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e),
        )


# ==============================
# LOGIN
# ==============================

@app.post("/login")
def login_user(user: UserLogin):

    try:

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute(
            """
            SELECT
                id,
                name,
                email,
                password_hash,
                role
            FROM users
            WHERE email = %s
            """,
            (user.email,),
        )

        existing_user = cursor.fetchone()

        cursor.close()
        conn.close()

        # User not found
        if existing_user is None:

            raise HTTPException(
                status_code=401,
                detail="Invalid email or password",
            )

        # Password verification
        if not password_hash.verify(
            user.password,
            existing_user[3],
        ):

            raise HTTPException(
                status_code=401,
                detail="Invalid email or password",
            )

        # Create JWT token
        access_token = create_access_token(
            existing_user[0],
            existing_user[2],
            existing_user[4],
        )

        return {
            "message": "Login successful",

            "access_token": access_token,

            "token_type": "bearer",

            "user": {
                "id": existing_user[0],
                "name": existing_user[1],
                "email": existing_user[2],
                "role": existing_user[4],
            },
        }

    except HTTPException:
        raise

    except Exception:

        raise HTTPException(
            status_code=500,
            detail="Internal server error",
        )


# ==============================
# PROTECTED ROUTE
# ==============================

@app.get("/protected")
def protected_route(
    credentials: HTTPAuthorizationCredentials = Depends(security),
):

    token = credentials.credentials

    payload = verify_token(token)

    return {
        "message": "You accessed a protected route",
        "user": payload,
    }


# ==============================
# CHAT - RAG PIPELINE
# ==============================

@app.post("/chat")
def chat(message: dict):

    # Get student's message
    user_message = message.get(
        "message",
        "",
    ).strip()

    # Check empty message
    if not user_message:

        raise HTTPException(
            status_code=400,
            detail="Message cannot be empty",
        )

    try:

        # Send question to RAG pipeline
        result = ask_campusmind(user_message)

        # Return AI answer + source information
        return {
            "reply": result["answer"],
            "sources": result["sources"],
        }

    except Exception as e:

        # Print actual error in backend terminal
        print("Chat error:", e)

        raise HTTPException(
            status_code=500,
            detail="Unable to generate answer",
        )