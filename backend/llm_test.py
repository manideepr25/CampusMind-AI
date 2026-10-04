import os

from dotenv import load_dotenv
from openai import OpenAI


load_dotenv()


api_key = os.getenv("OPENAI_API_KEY")


if not api_key:
    print("OPENAI_API_KEY not found.")
    exit()


client = OpenAI(api_key=api_key)


response = client.responses.create(
    model="gpt-5-mini",
    input="Explain what a college chatbot is in one simple sentence."
)


print("LLM response:")
print(response.output_text)