export function validateNoteTitle(title: unknown) {
  if (typeof title !== "string") {
    throw new Error("Title must be a string.");
  }

  const value = title.trim();

  if (!value) {
    throw new Error("Title cannot be empty.");
  }

  if (value.length > 255) {
    throw new Error("Title exceeds the maximum length.");
  }

  return value;
}

export function validateNoteContent(content: unknown) {
  if (typeof content !== "string") {
    throw new Error("Content must be a string.");
  }

  const value = content.trim();

  if (!value) {
    throw new Error("Content cannot be empty.");
  }

  if (value.length > 10000) {
    throw new Error("Content exceeds the maximum length.");
  }

  return value;
}