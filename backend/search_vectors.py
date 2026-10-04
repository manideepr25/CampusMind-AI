import chromadb

from sentence_transformers import SentenceTransformer


# Load the same embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")


# Connect to our existing ChromaDB
client = chromadb.PersistentClient(
    path="./chroma_db"
)


# Get our college document collection
collection = client.get_collection(
    name="college_documents"
)


# Student's question
question = "What B.Tech branches are available?"


# Convert question into an embedding
question_embedding = model.encode(
    question
).tolist()


# Search for the most relevant chunks
results = collection.query(
    query_embeddings=[question_embedding],
    n_results=2
)


print("Student Question:")
print(question)

print()

print("Relevant College Information:")
print("=" * 60)


for i, document in enumerate(results["documents"][0]):

    print(f"\nResult {i + 1}:")
    print(document)

    print()

    print(
        "Source:",
        results["metadatas"][0][i]["filename"]
    )

    print(
        "Chunk:",
        results["metadatas"][0][i]["chunk_id"]
    )

    print("=" * 60)