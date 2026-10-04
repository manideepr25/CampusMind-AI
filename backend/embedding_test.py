from sentence_transformers import SentenceTransformer


model = SentenceTransformer("all-MiniLM-L6-v2")


text = "The college offers B.Tech programs in AI and Data Science."

embedding = model.encode(text)


print("Text:")
print(text)

print()

print("Embedding created successfully!")

print("Embedding type:", type(embedding))
print("Embedding size:", len(embedding))

print()

print("First 10 values:")
print(embedding[:10])