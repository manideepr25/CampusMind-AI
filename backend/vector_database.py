import chromadb

from sentence_transformers import SentenceTransformer
from chunker import create_chunks


# Load embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")


# Create local ChromaDB
client = chromadb.PersistentClient(
    path="./chroma_db"
)


# Create or get collection
collection = client.get_or_create_collection(
    name="college_documents"
)


# Read and chunk college documents
chunks = create_chunks()


# Store chunks and embeddings
for chunk in chunks:

    embedding = model.encode(
        chunk["content"]
    ).tolist()

    collection.upsert(
        ids=[
            f'{chunk["filename"]}_{chunk["chunk_id"]}'
        ],
        documents=[
            chunk["content"]
        ],
        embeddings=[
            embedding
        ],
        metadatas=[
            {
                "filename": chunk["filename"],
                "chunk_id": chunk["chunk_id"],
            }
        ],
    )


print("Vector database created successfully!")
print("Total stored documents:", collection.count())