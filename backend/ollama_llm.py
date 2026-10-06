import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "qwen3:4b"


def generate_answer(question, context):

    prompt = f"""
/no_think

You are CampusMind AI, a college information assistant.

Answer the student's question using ONLY the information provided below.

Rules:
- Give ONLY the final answer.
- Do NOT explain your reasoning.
- Do NOT describe how you found the answer.
- Do NOT mention chunks.
- Do NOT mention sources inside the answer.
- Do NOT repeat the question.
- Do NOT say "we are given".
- Do NOT say "looking at the information".
- Do NOT invent information.
- Keep the answer short and direct.
- If the answer is a list, use bullet points.
- If the information is not available, say:
"I couldn't find this information in the college documents."

COLLEGE INFORMATION:
{context}

STUDENT QUESTION:
{question}

ANSWER:
"""

    response = requests.post(
        OLLAMA_URL,
        json={
            "model": MODEL_NAME,
            "prompt": prompt,
            "stream": False,
            "think": False,
            "options": {
                "temperature": 0.0,
                "num_predict": 800,
            },
        },
        timeout=300,
    )

    response.raise_for_status()

    data = response.json()

    answer = data.get("response", "").strip()

    if not answer:
        raise Exception("Qwen3 returned an empty response")

    # Remove visible thinking if Qwen3 still returns it
    if "<think>" in answer and "</think>" in answer:
        answer = answer.split("</think>", 1)[1].strip()

    elif "<think>" in answer:
        answer = answer.split("<think>", 1)[0].strip()

    # Remove accidental instruction/reasoning prefixes
    unwanted_prefixes = [
        "FINAL ANSWER:",
        "Answer:",
        "ANSWER:",
    ]

    for prefix in unwanted_prefixes:
        if answer.startswith(prefix):
            answer = answer[len(prefix):].strip()

    if not answer:
        raise Exception("No final answer returned by Qwen3")

    return answer