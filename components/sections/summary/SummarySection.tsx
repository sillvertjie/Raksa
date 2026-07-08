"use client";

import { useSummary } from "@/features/summary/hooks/useSummary";

import {
  Card,
  Heading,
  Text,
} from "@/components/ui";

export default function SummarySection() {
  const {
    summary,
    loading,
    error,
  } = useSummary();

  if (loading) {
    return (
      <section className="mt-10">
        <Heading>Overview</Heading>

        <Text className="mt-2">
          Loading summary...
        </Text>
      </section>
    );
  }

  if (error || !summary) {
    return (
      <section className="mt-10">
        <Heading>Overview</Heading>

        <Text className="mt-2 text-red-500">
          {error ?? "Failed to load summary."}
        </Text>
      </section>
    );
  }

  return (
    <section className="mt-10">
      <Heading>
        Overview
      </Heading>

      <Text className="mt-2">
        Welcome back! This is a quick overview of your workspace.
      </Text>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card>
          <Text>Total Notes</Text>

          <Heading className="mt-2">
            {summary.totalNotes}
          </Heading>
        </Card>

        <Card>
          <Text>Total Captures</Text>

          <Heading className="mt-2">
            {summary.totalCaptures}
          </Heading>
        </Card>

        <Card>
          <Text>Latest Capture</Text>

          <Heading className="mt-2 text-base">
            {summary.latestCapture ?? "-"}
          </Heading>
        </Card>
      </div>
    </section>
  );
}