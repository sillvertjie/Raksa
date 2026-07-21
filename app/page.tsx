import { Container } from "@/components/ui";

import DashboardClient from "@/components/dashboard/DashboardClient";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        w-full
        min-w-0
        overflow-x-hidden
        bg-raksa-background
        py-10
      "
    >
      <Container>
        <div
          className="
            w-full
            min-w-0
            max-w-full
            overflow-hidden
            rounded-xl
            bg-raksa-surface
            p-8
            shadow-lg
          "
        >
          <DashboardClient />
        </div>
      </Container>
    </main>
  );
}