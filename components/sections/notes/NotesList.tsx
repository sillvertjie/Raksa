import { Note } from "@/features/notes/types/note";
import NoteCard from "./NoteCard";

interface NotesListProps {
  notes: Note[];
}

export default function NotesList({
  notes,
}: NotesListProps) {
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          title={note.title}
          content={note.content}
        />
      ))}
    </div>
  );
}