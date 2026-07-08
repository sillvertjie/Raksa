import Container from "@/components/ui/layout/Container";

import DashboardClient from "@/components/dashboard/DashboardClient";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <Container>
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <DashboardClient />
        </div>
      </Container>
    </main>
  );
}