export default function NotesHeader() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Notes
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Store your knowledge and important information.
        </p>
      </div>

      <button
        className="
          rounded-lg
          bg-slate-900
          px-4
          py-2
          text-sm
          font-medium
          text-white
          transition
          hover:bg-slate-700
        "
      >
        New Note
      </button>
    </header>
  );
}