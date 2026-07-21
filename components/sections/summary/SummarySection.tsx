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

  let content;

  if (loading) {
    content = (
      <Text className="mt-2">
        Loading summary...
      </Text>
    );
  } else if (error || !summary) {
    content = (
      <Text className="mt-2 text-red-500">
        {error ??
          "Failed to load summary."}
      </Text>
    );
  } else {
    content = (
      <>
        <Text className="mt-2">
          Welcome back! This is a quick
          overview of your workspace.
        </Text>

        <div
          className="
            mt-6
            grid
            min-w-0
            gap-4
            md:grid-cols-3
          "
        >
          <Card>
            <Text>
              Total Notes
            </Text>

            <Heading className="mt-2">
              {summary.totalNotes}
            </Heading>
          </Card>

          <Card>
            <Text>
              Total Captures
            </Text>

            <Heading className="mt-2">
              {summary.totalCaptures}
            </Heading>
          </Card>

          <Card
            className="
              min-w-0
              overflow-hidden
            "
          >
            <Text>
              Latest Capture
            </Text>

            <Heading
              className="
                mt-2
                min-w-0
                overflow-hidden
                break-all
                text-base
                text-raksa-text-primary
              "
            >
              {summary.latestCapture ?? "-"}
            </Heading>
          </Card>
        </div>
      </>
    );
  }

  return (
    <section
      className="
        mt-10
        min-w-0
      "
    >
      <Heading>
        Overview
      </Heading>

      {content}
    </section>
  );
}