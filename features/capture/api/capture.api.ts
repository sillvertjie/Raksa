import { apiFetch } from "@/lib/api/client";

import type { CreateCaptureDTO } from "../dto/create-capture.dto";
import type { UpdateCaptureDTO } from "../dto/update-capture.dto";
import type { Capture } from "../types/capture";

const API_URL = "/api/capture";

export function getCaptures() {
  return apiFetch<Capture[]>(API_URL);
}

export function createCapture(
  dto: CreateCaptureDTO
) {
  return apiFetch<Capture>(API_URL, {
    method: "POST",
    body: JSON.stringify(dto),
  });
}

export function updateCapture(
  id: string,
  dto: UpdateCaptureDTO
) {
  return apiFetch<Capture>(
    `${API_URL}/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(dto),
    }
  );
}

export function deleteCapture(
  id: string
) {
  return apiFetch<Capture>(
    `${API_URL}/${id}`,
    {
      method: "DELETE",
    }
  );
}