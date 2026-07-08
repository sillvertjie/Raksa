import { Note } from "@/features/notes/types/note";

import NoteCard from "./NoteCard";

interface NotesListProps {
  notes: Note[];
  updating: boolean;
  onUpdate: (
    id: string,
    title: string,
    content: string
  ) => Promise<void>;
}

export default function NotesList({
  notes,
  updating,
  onUpdate,
}: NotesListProps) {
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          loading={updating}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}