import { PrismaKnowledgeDocumentRepository } from "./knowledge-document.repository";

declare global {
  var raksaKnowledgeDocumentRepository:
    | PrismaKnowledgeDocumentRepository
    | undefined;
}

export function getKnowledgeDocumentRepository() {
  if (!global.raksaKnowledgeDocumentRepository) {
    global.raksaKnowledgeDocumentRepository =
      new PrismaKnowledgeDocumentRepository();
  }

  return global.raksaKnowledgeDocumentRepository;
}