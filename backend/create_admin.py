from pwdlib import PasswordHash
from database import get_connection

password_hash = PasswordHash.recommended()

name = input("Admin name: ")
email = input("Admin email: ")
password = input("Admin password: ")

conn = get_connection()
cursor = conn.cursor()

hashed_password = password_hash.hash(password)

cursor.execute(
    """
    INSERT INTO users
    (name, email, password_hash, role)
    VALUES (%s, %s, %s, %s)
    RETURNING id, name, email, role
    """,
    (
        name,
        email,
        hashed_password,
        "admin",
    ),
)

admin = cursor.fetchone()

conn.commit()

cursor.close()
conn.close()

print()
print("Admin account created successfully!")
print("ID:", admin[0])
print("Name:", admin[1])
print("Email:", admin[2])
print("Role:", admin[3])