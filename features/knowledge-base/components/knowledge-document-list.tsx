import type { KnowledgeDocumentEntity } from "../entities/knowledge-document.entity";

interface KnowledgeDocumentListProps {
  documents: KnowledgeDocumentEntity[];
  selectedDocumentId?: string;
  onSelect?: (documentId: string) => void;
}

export function KnowledgeDocumentList({
  documents,
  selectedDocumentId,
  onSelect,
}: KnowledgeDocumentListProps) {
  if (documents.length === 0) {
    return (
      <div className="rounded-md border border-dashed p-6 text-center text-sm text-gray-500">
        No documents available.
      </div>
    );
  }

  return (
    <div className="flex flex-col divide-y rounded-md border">
      {documents.map((document) => (
        <button
          key={document.id}
          type="button"
          onClick={() => onSelect?.(document.id)}
          className={[
            "flex flex-col items-start px-4 py-3 text-left transition-colors",
            selectedDocumentId === document.id
              ? "bg-gray-100"
              : "hover:bg-gray-50",
          ].join(" ")}
        >
          <span className="font-medium">
            {document.title}
          </span>

          <span className="mt-1 text-xs text-gray-500">
            {document.slug}
          </span>
        </button>
      ))}
    </div>
  );
}