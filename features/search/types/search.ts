export interface SearchResult {
  notes: SearchNoteResult[];
  captures: SearchCaptureResult[];
}

export interface SearchNoteResult {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface SearchCaptureResult {
  id: string;
  content: string;
  createdAt: string;
}