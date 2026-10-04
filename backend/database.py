import os

import psycopg
from dotenv import load_dotenv

load_dotenv()

DB_PASSWORD = os.getenv("DB_PASSWORD")

DATABASE_URL = f"postgresql://postgres:{DB_PASSWORD}@localhost:5432/campusmind_db"


def get_connection():
    return psycopg.connect(DATABASE_URL)