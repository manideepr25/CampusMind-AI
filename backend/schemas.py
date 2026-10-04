from pydantic import BaseModel


class UserCreate(BaseModel):
    name: str
    email: str
    password: str
    role: str = "student"


class UserLogin(BaseModel):
    email: str
    password: str