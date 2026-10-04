from pathlib import Path


DOCUMENTS_FOLDER = Path(__file__).parent / "documents"


def read_documents():
    documents = []

    for file_path in DOCUMENTS_FOLDER.glob("*.txt"):
        content = file_path.read_text(
            encoding="utf-8"
        )

        documents.append(
            {
                "filename": file_path.name,
                "content": content,
            }
        )

    return documents


if __name__ == "__main__":
    documents = read_documents()

    for document in documents:
        print("=" * 50)
        print("FILE:", document["filename"])
        print("=" * 50)
        print(document["content"])