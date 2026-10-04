import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "qwen3:4b"


def generate_answer(question, context):

    prompt = f"""
Answer the student's question using ONLY the information in the context.

CONTEXT:
{context}

QUESTION:
{question}

FINAL ANSWER:
"""

    try:
        response = requests.post(
            OLLAMA_URL,
            json={
                "model": MODEL_NAME,
                "prompt": prompt,
                "stream": False,

                # Disable Qwen3 thinking
                "think": False,

                "options": {
                    "temperature": 0.1,
                    "num_predict": 300
                }
            },
            timeout=120
        )

        response.raise_for_status()

        data = response.json()

        answer = data.get("response", "").strip()

        # Safety check
        if not answer:
            return "I couldn't generate an answer."

        return answer

    except requests.exceptions.RequestException as error:

        print("Ollama connection error:", error)

        return "Unable to connect to the AI model."

    except Exception as error:

        print("LLM error:", error)

        return "An error occurred while generating the answer."


if __name__ == "__main__":

    question = input("Enter a question: ")

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