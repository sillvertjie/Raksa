"use client";

import {
  useState,
} from "react";


type Props = {
  onSubmit(
    content: string,
  ): Promise<void>;
};


export function CommentForm({
  onSubmit,
}: Props) {
  const [content, setContent] =
    useState("");

  const [submitting, setSubmitting] =
    useState(false);


  async function handleSubmit(
    event: React.FormEvent,
  ) {
    event.preventDefault();

    if (!content.trim()) {
      return;
    }


    setSubmitting(true);

    try {
      await onSubmit(
        content,
      );

      setContent("");

    } finally {
      setSubmitting(false);
    }
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3"
    >
      <textarea
        value={content}
        onChange={(event) =>
          setContent(
            event.target.value,
          )
        }
        className="rounded border p-2"
        placeholder="Write a comment..."
      />


      <button
        type="submit"
        disabled={submitting}
        className="rounded border px-4 py-2"
      >
        {
          submitting
            ? "Adding..."
            : "Add Comment"
        }
      </button>

    </form>
  );
}