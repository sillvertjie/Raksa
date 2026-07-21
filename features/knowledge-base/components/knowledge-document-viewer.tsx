import type { KnowledgeDocumentEntity } from "../entities/knowledge-document.entity";
import type { KnowledgeDocumentVersionEntity } from "../entities/knowledge-document-version.entity";

interface KnowledgeDocumentViewerProps {
  document: KnowledgeDocumentEntity | null;
  version: KnowledgeDocumentVersionEntity | null;
}

export function KnowledgeDocumentViewer({
  document,
  version,
}: KnowledgeDocumentViewerProps) {
  if (!document) {
    return (
      <section className="flex flex-1 items-center justify-center">
        <p className="text-sm text-gray-500">
          Select a document to start reading.
        </p>
      </section>
    );
  }

  return (
    <section className="flex flex-1 flex-col">
      <header className="border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-semibold">
          {document.title}
        </h1>

        <p
          className="
            mt-2
            text-sm
            text-raksa-text-secondary
          "
          >
          Version {version?.versionNumber ?? "-"}
        </p>
      </header>

      <article className="flex-1 px-6 py-6">
        <pre className="whitespace-pre-wrap break-words font-sans">
          {version
            ? JSON.stringify(
                version.content,
                null,
                2,
              )
            : "No content available."}
        </pre>
      </article>
    </section>
  );
}