import type { CreateNoteDTO } from "../dto/create-note.dto";
import type { UpdateNoteDTO } from "../dto/update-note.dto";
import type { Note } from "../types/note";

const API_URL = "/api/notes";

export async function getNotes(): Promise<Note[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch notes.");
  }

  return response.json();
}

export async function getNote(
  id: string
): Promise<Note> {
  const response = await fetch(
    `${API_URL}/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch note.");
  }

  return response.json();
}

export async function createNote(
  dto: CreateNoteDTO
): Promise<Note> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify(dto),
  });

  if (!response.ok) {
    throw new Error("Failed to create note.");
  }

  return response.json();
}

export async function updateNote(
  id: string,
  dto: UpdateNoteDTO
): Promise<Note> {
  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(dto),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update note.");
  }

  return response.json();
}

export async function deleteNote(
  id: string
): Promise<Note> {
  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete note.");
  }

  return response.json();
}