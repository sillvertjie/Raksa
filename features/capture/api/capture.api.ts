import type { CreateCaptureDTO } from "../dto/create-capture.dto";
import type { UpdateCaptureDTO } from "../dto/update-capture.dto";
import type { Capture } from "../types/capture";

const API_URL = "/api/capture";

export async function getCaptures(): Promise<Capture[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch captures.");
  }

  return response.json();
}

export async function createCapture(
  dto: CreateCaptureDTO
): Promise<Capture> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  if (!response.ok) {
    throw new Error("Failed to create capture.");
  }

  return response.json();
}

export async function updateCapture(
  id: string,
  dto: UpdateCaptureDTO
): Promise<Capture> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  if (!response.ok) {
    throw new Error("Failed to update capture.");
  }

  return response.json();
}

export async function deleteCapture(
  id: string
): Promise<Capture> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete capture.");
  }

  return response.json();
}