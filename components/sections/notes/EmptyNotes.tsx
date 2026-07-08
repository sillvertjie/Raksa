export default function EmptyNotes() {
  return (
    <div
      className="
        rounded-xl
        border
        border-dashed
        border-slate-300
        bg-slate-50
        p-10
        text-center
      "
    >
      <h2 className="text-lg font-semibold text-slate-700">
        No Notes Yet
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Create your first note to start building your knowledge base.
      </p>
    </div>
  );
}