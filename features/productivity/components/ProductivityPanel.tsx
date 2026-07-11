"use client";

import { useState } from "react";

import { useProductivity } from "../hooks/useProductivity";

export function ProductivityPanel() {
  const [input, setInput] = useState("");

  const {
    data,
    loading,
    process,
  } = useProductivity();

  async function handleSubmit() {
    await process({
      action: "transform",
      input,
    });
  }

  return (
    <section>
      <textarea
        value={input}
        onChange={(event) =>
          setInput(event.target.value)
        }
        placeholder="Masukkan teks..."
      />

      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Processing..." : "Transform"}
      </button>

      {data && (
        <p>
          {data.output}
        </p>
      )}
    </section>
  );
}