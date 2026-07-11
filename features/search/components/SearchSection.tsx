"use client";

import { useSearch } from "../hooks/useSearch";

import { useAISearch } from "../ai/hooks/useAISearch";

import { Heading, Text } from "@/components/ui";

import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import AISearchResult from "./AISearchResult";

export default function SearchSection() {
  const {
    result,
    loading,
    error,
    search,
    clear,
  } = useSearch();


  const {
    result: aiResult,
    loading: aiLoading,
    error: aiError,
    search: searchAI,
    clear: clearAI,
  } = useAISearch();


  async function handleSearch(
    query: string,
  ) {
    await search({
      query,
    });
  }


  async function handleAISearch(
    query: string,
  ) {
    await searchAI({
      query,
    });
  }


  function clearAll() {
    clear();
    clearAI();
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
          loading={
            loading || aiLoading
          }
          onSearch={
            handleSearch
          }
          onClear={
            clearAll
          }
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


      <section className="mt-10">

        <Heading className="text-lg">
          AI Search
        </Heading>


        <Text className="mt-2">
          Ask AI to understand your workspace information.
        </Text>


        <button
          type="button"
          className="mt-4 rounded-md border px-4 py-2"
          disabled={aiLoading}
          onClick={() =>
            handleAISearch(
              result?.notes[0]?.content ??
              "Search workspace information."
            )
          }
        >
          {aiLoading
            ? "Searching AI..."
            : "Run AI Search"}
        </button>


        {aiError && (
          <Text className="mt-4 text-red-500">
            {aiError}
          </Text>
        )}


        <AISearchResult
          result={aiResult}
        />

      </section>

    </section>
  );
}