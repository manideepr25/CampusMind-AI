from document_reader import read_documents


def split_text(text, chunk_size=700):
    chunks = []

    paragraphs = [
        paragraph.strip()
        for paragraph in text.split("\n\n")
        if paragraph.strip()
    ]

    current_chunk = ""

    for paragraph in paragraphs:

        if len(current_chunk) + len(paragraph) + 2 <= chunk_size:
            if current_chunk:
                current_chunk += "\n\n"

            current_chunk += paragraph

        else:
            if current_chunk:
                chunks.append(current_chunk)

            current_chunk = paragraph

    if current_chunk:
        chunks.append(current_chunk)

    return chunks


def create_chunks():
    documents = read_documents()

    all_chunks = []

    for document in documents:
        chunks = split_text(document["content"])

        for index, chunk in enumerate(chunks):
            all_chunks.append(
                {
                    "filename": document["filename"],
                    "chunk_id": index + 1,
                    "content": chunk,
                }
            )

    return all_chunks


if __name__ == "__main__":
    chunks = create_chunks()

    print("Total chunks:", len(chunks))
    print()

    for chunk in chunks:
        print("=" * 60)
        print("FILE:", chunk["filename"])
        print("CHUNK:", chunk["chunk_id"])
        print("=" * 60)
        print(chunk["content"])
        print()