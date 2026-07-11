import {
  Card,
  Text,
} from "@/components/ui";

import type { AISearchResponse } from "../ai/contracts/ai-search-response";

interface AISearchResultProps {
  result: AISearchResponse | null;
}

export default function AISearchResult({
  result,
}: AISearchResultProps) {
  if (!result) {
    return null;
  }

  return (
    <Card className="mt-6">
      <Text>
        {result.content}
      </Text>
    </Card>
  );
}