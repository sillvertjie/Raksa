"use client";

import {
  useState,
} from "react";

import {
  Heading,
  Text,
} from "@/components/ui";

import { useAdvancedSearch } from "../hooks/useAdvancedSearch";

import { AdvancedSearchResults } from "./AdvancedSearchResults";


export function GlobalSearch() {

  const [query, setQuery] =
    useState("");


  const {
    result,
    loading,
    error,
    search,
  } = useAdvancedSearch();


  async function handleSearch() {
    if (!query.trim()) {
      return;
    }


    await search({
      query,
    });
  }


  return (
    <section className="space-y-6">

      <div>
        <Heading>
          Global Search
        </Heading>

        <Text className="mt-2">
          Search across your workspace knowledge.
        </Text>
      </div>


      <div className="flex gap-2">

        <input
          className="flex-1 rounded border px-3 py-2"
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
          placeholder="Search workspace..."
        />


        <button
          type="button"
          className="rounded border px-4 py-2"
          disabled={loading}
          onClick={handleSearch}
        >
          {loading
            ? "Searching..."
            : "Search"}
        </button>

      </div>


      {error && (
        <Text className="text-red-500">
          {error}
        </Text>
      )}


      <AdvancedSearchResults
        results={result}
      />

    </section>
  );
}