from rag_search import search_documents
from ollama_llm import generate_answer


def ask_campusmind(question):
    # Step 1: Search relevant college documents
    results = search_documents(question, top_k=3)

    documents = results.get("documents", [[]])[0]
    metadatas = results.get("metadatas", [[]])[0]

    # Step 2: Build context from retrieved documents
    context_parts = []

    for index, document in enumerate(documents):
        filename = metadatas[index].get(
            "filename",
            "Unknown"
        )

        chunk_id = metadatas[index].get(
            "chunk_id",
            "Unknown"
        )

        context_parts.append(
            f"""
SOURCE: {filename}
CHUNK: {chunk_id}

{document}
"""
        )

    context = "\n".join(context_parts)

    # Temporary debug:
    # Show exactly what is sent to Qwen3
    print()
    print("=" * 60)
    print("CONTEXT SENT TO QWEN3")
    print("=" * 60)
    print(context)

    # Step 3: Send retrieved context to Qwen3
    answer = generate_answer(
        question,
        context
    )

    return {
        "question": question,
        "answer": answer,
        "sources": metadatas,
    }


if __name__ == "__main__":
    question = input(
        "Ask CampusMind AI: "
    )

    result = ask_campusmind(question)

    print()
    print("=" * 60)
    print("CAMPUSMIND AI ANSWER")
    print("=" * 60)
    print()

    print(result["answer"])

    print()
    print("=" * 60)
    print("SOURCES")
    print("=" * 60)

    for source in result["sources"]:
        print(
            f'- {source["filename"]} '
            f'(Chunk {source["chunk_id"]})'
        )