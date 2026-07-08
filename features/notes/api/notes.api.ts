import { CreateNoteDTO } from "../dto/create-note.dto";
import { UpdateNoteDTO } from "../dto/update-note.dto";

const BASE_URL = "/api/notes";

export async function getNotes() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch notes.");
  }

  return response.json();
}

export async function getNote(id: string) {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch note.");
  }

  return response.json();
}

export async function createNote(dto: CreateNoteDTO) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  if (!response.ok) {
    throw new Error("Failed to update note.");
  }

  return response.json();
}

export async function deleteNote(id: string) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete note.");
  }
}