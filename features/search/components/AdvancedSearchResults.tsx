import {
  Card,
  Heading,
  Text,
} from "@/components/ui";

import type { SearchIndexDocument } from "../entities/search-index-document.entity";


type Props = {
  results: SearchIndexDocument[];
};


function formatDate(date: Date | string) {
  return new Date(date).toLocaleString();
}

function formatSource(
  source: SearchIndexDocument["source"],
) {
  const labels = {
    NOTE: "Note",
    CAPTURE: "Capture",
    PROJECT: "Project",
    TASK: "Task",
    KNOWLEDGE_DOCUMENT: "Knowledge Document",
    FILE: "File",
  };

  return labels[source];
}

export function AdvancedSearchResults({
  results,
}: Props) {

  if (results.length === 0) {
    return (
      <Text className="mt-6 text-slate-500">
        No results found.
      </Text>
    );
  }


  return (
    <section className="mt-6 space-y-4">

      <Heading className="text-lg">
        Search Results ({results.length})
      </Heading>


      {results.map((item) => (
        <Card key={item.id}>

          <Text className="text-sm text-slate-500">
            {formatSource(item.source)}
          </Text>


          <Heading className="text-base">
            {item.title}
          </Heading>


          <Text className="mt-2">
            {item.content}
          </Text>


          <Text className="mt-2 text-sm text-slate-500">
            {formatDate(item.createdAt)}
          </Text>

        </Card>
      ))}

    </section>
  );
}