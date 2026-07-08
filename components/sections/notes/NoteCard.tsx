interface NoteCardProps {
  title: string;
  content: string;
}

export default function NoteCard({
  title,
  content,
}: NoteCardProps) {
  return (
    <article className="rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {content}
      </p>
    </article>
  );
}