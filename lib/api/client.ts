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

  if (!response.ok) {
    let message = `Request failed (${response.status}).`;

    try {
      const error =
        await response.json();

      if (
        error &&
        typeof error.message === "string"
      ) {
        message = error.message;
      }
    } catch {
      // Ignore invalid JSON response.
    }

    throw new Error(message);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}