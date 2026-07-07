import {
  CaptureSection,
  FutureModulesSection,
  HeaderSection,
  SummarySection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <HeaderSection />

        <SummarySection />

        <CaptureSection />

        <FutureModulesSection />
      </div>
    </main>
  );
}