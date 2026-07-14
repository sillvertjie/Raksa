export type SearchIndexEvent =
  | SearchDocumentCreatedEvent
  | SearchDocumentUpdatedEvent
  | SearchDocumentDeletedEvent;

export interface SearchDocumentCreatedEvent {
  type: "SEARCH_DOCUMENT_CREATED";

  payload: {
    id: string;
    source: string;
    title: string;
    content: string;
  };
}

export interface SearchDocumentUpdatedEvent {
  type: "SEARCH_DOCUMENT_UPDATED";

  payload: {
    id: string;
    source: string;
    title: string;
    content: string;
  };
}

export interface SearchDocumentDeletedEvent {
  type: "SEARCH_DOCUMENT_DELETED";

  payload: {
    id: string;
  };
}