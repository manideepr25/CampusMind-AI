from sentence_transformers import SentenceTransformer

from chunker import create_chunks


# Load embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")


# Get college document chunks
chunks = create_chunks()


print("Total chunks:", len(chunks))
print()


# Create embeddings
for chunk in chunks:

    embedding = model.encode(chunk["content"])

    print("=" * 60)
    print("File:", chunk["filename"])
    print("Chunk:", chunk["chunk_id"])
    print("Embedding size:", len(embedding))
    print("First 5 values:", embedding[:5])
    print()