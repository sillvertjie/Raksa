import type { Summary } from "../types/summary";

const API_URL = "/api/summary";

export async function getSummary(): Promise<Summary> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch summary.");
  }

  return response.json();
}