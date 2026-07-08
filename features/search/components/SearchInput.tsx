"use client";

import { FormEvent, useState } from "react";

import { Button, Input } from "@/components/ui";

interface SearchInputProps {
  loading: boolean;
  onSearch: (query: string) => Promise<void>;
  onClear: () => void;
}

export default function SearchInput({
  loading,
  onSearch,
  onClear,
}: SearchInputProps) {
  const [query, setQuery] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    await onSearch(query);
  }

  function handleClear() {
    setQuery("");
    onClear();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2"
    >
      <Input
        placeholder="Search notes and captures..."
        value={query}
        onChange={(event) =>
          setQuery(event.target.value)
        }
      />

      <Button
        type="submit"
        loading={loading}
        loadingText="Searching..."
        disabled={!query.trim()}
      >
        Search
      </Button>

      <Button
        type="button"
        onClick={handleClear}
        disabled={loading}
      >
        Clear
      </Button>
    </form>
  );
}