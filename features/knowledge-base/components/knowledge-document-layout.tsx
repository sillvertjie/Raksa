import type { KnowledgeDocumentEntity } from "../entities/knowledge-document.entity";
import type { KnowledgeDocumentVersionEntity } from "../entities/knowledge-document-version.entity";

import { KnowledgeDocumentBreadcrumb } from "./knowledge-document-breadcrumb";
import { KnowledgeDocumentTree } from "./knowledge-document-tree";
import { KnowledgeDocumentViewer } from "./knowledge-document-viewer";

interface KnowledgeDocumentLayoutProps {
  documents: KnowledgeDocumentEntity[];
  breadcrumbItems: {
    id: string;
    title: string;
  }[];
  selectedDocument: KnowledgeDocumentEntity | null;
  selectedVersion: KnowledgeDocumentVersionEntity | null;
  onSelectDocument?: (
    documentId: string,
  ) => void;
}

export function KnowledgeDocumentLayout({
  documents,
  breadcrumbItems,
  selectedDocument,
  selectedVersion,
  onSelectDocument,
}: KnowledgeDocumentLayoutProps) {
  return (
    <div className="flex h-full flex-col">
      <KnowledgeDocumentBreadcrumb
        items={breadcrumbItems}
        onSelect={onSelectDocument}
      />

      <div className="flex flex-1 overflow-hidden">
        <KnowledgeDocumentTree
          documents={documents}
          selectedDocumentId={
            selectedDocument?.id
          }
          onSelect={onSelectDocument}
        />

        <KnowledgeDocumentViewer
          document={selectedDocument}
          version={selectedVersion}
        />
      </div>
    </div>
  );
}