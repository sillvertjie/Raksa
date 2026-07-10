export async function apiFetch<T>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(input, {
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    ...init,
  });

  const result = await response.json();

  if (!response.ok) {
    let message = `Request failed (${response.status}).`;

    if (
      result?.error?.message &&
      typeof result.error.message === "string"
    ) {
      message = result.error.message;
    }

    throw new Error(message);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  if (
    !result ||
    typeof result !== "object" ||
    !("success" in result)
  ) {
    throw new Error("Invalid API response.");
  }

  if (!result.success) {
    throw new Error(
      result.error?.message ??
        "Unknown API error."
    );
  }

  return result.data as T;
}