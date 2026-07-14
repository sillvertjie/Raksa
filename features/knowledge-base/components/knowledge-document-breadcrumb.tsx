interface KnowledgeDocumentBreadcrumbProps {
  items: {
    id: string;
    title: string;
  }[];
  onSelect?: (documentId: string) => void;
}

export function KnowledgeDocumentBreadcrumb({
  items,
  onSelect,
}: KnowledgeDocumentBreadcrumbProps) {
  return (
    <nav
      aria-label="Knowledge document breadcrumb"
      className="border-b border-gray-200 px-4 py-3"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li
            key={item.id}
            className="flex items-center gap-2"
          >
            <button
              type="button"
              onClick={() => onSelect?.(item.id)}
              className="hover:text-black"
            >
              {item.title}
            </button>

            {index < items.length - 1 && (
              <span>/</span>
            )}
          </li>
        ))}

        {items.length === 0 && (
          <li>No document selected</li>
        )}
      </ol>
    </nav>
  );
}