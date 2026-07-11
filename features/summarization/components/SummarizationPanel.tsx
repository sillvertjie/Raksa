"use client";

import {
  Card,
  Heading,
  Text,
  Textarea,
} from "@/components/ui";

interface SummarizationPanelProps {
  content: string;
  summary?: string;
  loading?: boolean;
  error?: string | null;
  onContentChange?: (
    value: string,
  ) => void;
}

export function SummarizationPanel({
  content,
  summary,
  loading = false,
  error = null,
  onContentChange,
}: SummarizationPanelProps) {
  return (
    <Card>
      <Heading>
        AI Summarization
      </Heading>

      <Textarea
        className="mt-4"
        value={content}
        onChange={(event) =>
          onContentChange?.(
            event.target.value,
          )
        }
        placeholder="Enter text to summarize..."
      />

      {loading && (
        <Text className="mt-4">
          Generating summary...
        </Text>
      )}

      {error && (
        <Text className="mt-4 text-red-500">
          {error}
        </Text>
      )}

      {summary && !loading && (
        <div className="mt-6">
          <Heading>
            Result
          </Heading>

          <Text className="mt-2">
            {summary}
          </Text>
        </div>
      )}
    </Card>
  );
}