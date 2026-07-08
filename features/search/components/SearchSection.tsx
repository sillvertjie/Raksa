"use client";

import { Heading, Text } from "@/components/ui";

import { useSearch } from "../hooks/useSearch";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

export default function SearchSection() {
  const {
    result,
    loading,
    error,
    search,
  } = useSearch();

  async function handleSearch(query: string) {
    await search({
      query,
    });
  }

  return (
    <section className="mt-10">
      <Heading>
        Search
      </Heading>

      <Text className="mt-2">
        Search across your notes and captures.
      </Text>

      <div className="mt-6">
        <SearchInput
          loading={loading}
          onSearch={handleSearch}
        />
      </div>

      {error && (
        <Text className="mt-4 text-red-500">
          {error}
        </Text>
      )}

      <SearchResults
        result={result}
      />
    </section>
  );
}