import type { KnowledgeDocumentEntity } from "../entities/knowledge-document.entity";

interface KnowledgeDocumentTreeProps {
  documents: KnowledgeDocumentEntity[];
  selectedDocumentId?: string;
  onSelect?: (documentId: string) => void;
}

export function KnowledgeDocumentTree({
  documents,
  selectedDocumentId,
  onSelect,
}: KnowledgeDocumentTreeProps) {
  return (
    <aside className="w-72 border-r border-gray-200">
      <div className="border-b px-4 py-3">
        <h2 className="font-semibold">
          Knowledge Base
        </h2>
      </div>

      <ul className="divide-y">
        {documents.map((document) => (
          <li key={document.id}>
            <button
              type="button"
              onClick={() => onSelect?.(document.id)}
              className={[
                "flex w-full items-center px-4 py-3 text-left transition-colors",
                selectedDocumentId === document.id
                  ? "bg-gray-100 font-medium"
                  : "hover:bg-gray-50",
              ].join(" ")}
            >
              {document.title}
            </button>
          </li>
        ))}

        {documents.length === 0 && (
          <li className="px-4 py-6 text-sm text-gray-500">
            No documents available.
          </li>
        )}
      </ul>
    </aside>
  );
}