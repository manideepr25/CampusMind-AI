from rag_search import search_documents
from ollama_llm import generate_answer


# ==========================================
# RAG PIPELINE
# ==========================================

def ask_campusmind(question):

    # --------------------------------------
    # STEP 1: SEARCH CHROMADB
    # --------------------------------------

    results = search_documents(
        question,
        top_k=3
    )


    # --------------------------------------
    # STEP 2: GET RETRIEVED DOCUMENTS
    # --------------------------------------

    documents = results.get(
        "documents",
        [[]]
    )[0]


    metadatas = results.get(
        "metadatas",
        [[]]
    )[0]


    # --------------------------------------
    # STEP 3: CREATE CONTEXT
    # --------------------------------------

    context_parts = []


    for index, document in enumerate(
        documents
    ):

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


    context = "\n".join(
        context_parts
    )


    # --------------------------------------
    # STEP 4: SEND CONTEXT TO QWEN3
    # --------------------------------------

    answer = generate_answer(
        question,
        context
    )


    # --------------------------------------
    # STEP 5: RETURN RESULT
    # --------------------------------------

    return {
        "question": question,
        "answer": answer,
        "sources": metadatas,
    }


# ==========================================
# TEST RAG PIPELINE
# ==========================================

if __name__ == "__main__":

    question = input(
        "Ask CampusMind AI: "
    )


    result = ask_campusmind(
        question
    )


    print()
    print("=" * 60)
    print("CAMPUSMIND AI ANSWER")
    print("=" * 60)
    print()

    print(
        result["answer"]
    )


    print()
    print("=" * 60)
    print("SOURCES")
    print("=" * 60)


    for source in result["sources"]:

        print(
            f'- {source["filename"]} '
            f'(Chunk {source["chunk_id"]})'
        )
