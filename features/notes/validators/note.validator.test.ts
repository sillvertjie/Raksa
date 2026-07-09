import { describe, expect, it } from "vitest";

import {
  validateNoteContent,
  validateNoteTitle,
} from "./note.validator";

describe("validateNoteTitle", () => {
  it("should return trimmed title when title is valid", () => {
    const result = validateNoteTitle("  My Note  ");

    expect(result).toBe("My Note");
  });

  it("should throw error when title is not a string", () => {
    expect(() => validateNoteTitle(123)).toThrow(
      "Title must be a string."
    );
  });

  it("should throw error when title is empty", () => {
    expect(() => validateNoteTitle("   ")).toThrow(
      "Title cannot be empty."
    );
  });

  it("should throw error when title exceeds maximum length", () => {
    const title = "a".repeat(256);

    expect(() => validateNoteTitle(title)).toThrow(
      "Title exceeds the maximum length."
    );
  });
});

describe("validateNoteContent", () => {
  it("should return trimmed content when content is valid", () => {
    const result = validateNoteContent("  Hello World  ");

    expect(result).toBe("Hello World");
  });

  it("should throw error when content is not a string", () => {
    expect(() => validateNoteContent(123)).toThrow(
      "Content must be a string."
    );
  });

  it("should throw error when content is empty", () => {
    expect(() => validateNoteContent("   ")).toThrow(
      "Content cannot be empty."
    );
  });

  it("should throw error when content exceeds maximum length", () => {
    const content = "a".repeat(10001);

    expect(() => validateNoteContent(content)).toThrow(
      "Content exceeds the maximum length."
    );
  });
});