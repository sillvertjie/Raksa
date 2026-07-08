import { NotesSection } from "@/components/sections";

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <NotesSection />
      </div>
    </main>
  );
}