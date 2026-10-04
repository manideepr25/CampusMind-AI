import requests


# ==========================================
# OLLAMA SETTINGS
# ==========================================

OLLAMA_URL = "http://localhost:11434/api/generate"

MODEL_NAME = "qwen3:4b"


# ==========================================
# GENERATE ANSWER USING QWEN3
# ==========================================

def generate_answer(
    question,
    context
):

    prompt = f"""
You are CampusMind AI, a college information assistant.

Answer the student's question using ONLY the information
provided in the context below.

If the answer is not available in the context,
say:

"I couldn't find this information in the college documents."

Do not invent or assume information.

Keep the answer clear, simple and helpful.

CONTEXT:
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
            
        },
        timeout=300,
    )


    response.raise_for_status()


    data = response.json()


    return data["response"].strip()


# ==========================================
# TEST QWEN3
# ==========================================

if __name__ == "__main__":

    question = input(
        "Enter a question: "
    )


    context = """
The college offers the following B.Tech branches:

1. Computer Science and Engineering (CSE)
2. Artificial Intelligence and Data Science (AI&DS)
3. Artificial Intelligence and Machine Learning (AI&ML)
4. Information Technology (IT)
5. Electronics and Communication Engineering (ECE)
6. Electrical and Electronics Engineering (EEE)
7. Mechanical Engineering (MECH)
8. Civil Engineering (CIVIL)
"""


    answer = generate_answer(
        question,
        context
    )


    print()
    print("=" * 60)
    print("QWEN3 ANSWER")
    print("=" * 60)
    print()
    print(answer)