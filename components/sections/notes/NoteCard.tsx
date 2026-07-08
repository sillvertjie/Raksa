import { Button } from "@/components/ui/actions";

interface NoteCardProps {
  title: string;
  content: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function NoteCard({
  title,
  content,
  onEdit,
  onDelete,
}: NoteCardProps) {
  return (
    <article className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="mt-2 whitespace-pre-wrap text-sm text-slate-600">
            {content}
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            type="button"
            onClick={onEdit}
          >
            Edit
          </Button>

          <Button
            type="button"
            onClick={onDelete}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete
          </Button>
        </div>
      </div>
    </article>
  );
}