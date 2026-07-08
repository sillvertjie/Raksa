import { Note } from "@/features/notes/types/note";

import NoteCard from "./NoteCard";

interface NotesListProps {
  notes: Note[];
  updatingId: string | null;
  deletingId: string | null;
  onUpdate: (
    id: string,
    title: string,
    content: string
  ) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export default function NotesList({
  notes,
  updatingId,
  deletingId,
  onUpdate,
  onDelete,
}: NotesListProps) {
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          createdAt={note.createdAt}
          updatedAt={note.updatedAt}
          updating={updatingId === note.id}
          deleting={deletingId === note.id}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}