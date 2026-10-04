import chromadb

from sentence_transformers import SentenceTransformer


# ==========================================
# LOAD EMBEDDING MODEL
# ==========================================

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


# ==========================================
# CONNECT TO CHROMADB
# ==========================================

client = chromadb.PersistentClient(
    path="./chroma_db"
)


# ==========================================
# GET COLLEGE DOCUMENT COLLECTION
# ==========================================

collection = client.get_collection(
    name="college_documents"
)


# ==========================================
# SEARCH RELEVANT COLLEGE INFORMATION
# ==========================================

def search_documents(
    question,
    top_k=3
):

    # Create embedding for the question
    question_embedding = model.encode(
        question
    ).tolist()


    # Search ChromaDB
    results = collection.query(
        query_embeddings=[
            question_embedding
        ],
        n_results=top_k,
    )


    return results


# ==========================================
# TEST SEARCH
# ==========================================

if __name__ == "__main__":

    question = input(
        "Ask a college question: "
    )


    results = search_documents(
        question
    )


    print()
    print("=" * 60)
    print("SEARCH RESULTS")
    print("=" * 60)


    documents = results.get(
        "documents",
        [[]]
    )[0]


    metadatas = results.get(
        "metadatas",
        [[]]
    )[0]


    distances = results.get(
        "distances",
        [[]]
    )[0]


    for index, document in enumerate(
        documents
    ):

        print()
        print("-" * 60)

        print(
            "Result:",
            index + 1
        )

        print(
            "File:",
            metadatas[index]["filename"]
        )

        print(
            "Chunk:",
            metadatas[index]["chunk_id"]
        )

        print(
            "Distance:",
            distances[index]
        )

        print()

        print(document)
