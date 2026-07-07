export function validateCaptureContent(content: unknown) {
  if (typeof content !== "string") {
    throw new Error("Content must be a string.");
  }

  const value = content.trim();

  if (!value) {
    throw new Error("Content cannot be empty.");
  }

  if (value.length > 5000) {
    throw new Error("Content exceeds the maximum length.");
  }

  return value;
}