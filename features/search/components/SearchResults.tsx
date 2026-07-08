import {
  Card,
  Heading,
  Text,
} from "@/components/ui";

import type { SearchResult } from "../types/search";

interface SearchResultsProps {
  result: SearchResult | null;
}

function formatDate(date: string) {
  return new Date(date).toLocaleString();
}

export default function SearchResults({
  result,
}: SearchResultsProps) {
  if (!result) {
    return null;
  }

  const totalResults =
    result.notes.length +
    result.captures.length;

  if (totalResults === 0) {
    return (
      <Text className="mt-6 text-slate-500">
        No results found.
      </Text>
    );
  }

  return (
    <div className="mt-6 space-y-8">
      <section>
        <Heading className="text-lg">
          Notes ({result.notes.length})
        </Heading>

        <div className="mt-3 space-y-3">
          {result.notes.length === 0 ? (
            <Text>
              No matching notes.
            </Text>
          ) : (
            result.notes.map((note) => (
              <Card key={note.id}>
                <Heading className="text-base">
                  {note.title}
                </Heading>

                <Text className="mt-2">
                  {note.content}
                </Text>

                <Text className="mt-2 text-sm text-slate-500">
                  {formatDate(note.createdAt)}
                </Text>
              </Card>
            ))
          )}
        </div>
      </section>

      <section>
        <Heading className="text-lg">
          Captures ({result.captures.length})
        </Heading>

        <div className="mt-3 space-y-3">
          {result.captures.length === 0 ? (
            <Text>
              No matching captures.
            </Text>
          ) : (
            result.captures.map((capture) => (
              <Card key={capture.id}>
                <Text>
                  {capture.content}
                </Text>

                <Text className="mt-2 text-sm text-slate-500">
                  {formatDate(
                    capture.createdAt
                  )}
                </Text>
              </Card>
            ))
          )}
        </div>
      </section>
    </div>
  );
}