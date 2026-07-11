"use client";

import { useWorkspaceActions } from "../hooks/useWorkspaceActions";

export function WorkspaceActionsPanel() {
  const {
    execute,
    loading,
    result,
  } = useWorkspaceActions();

  async function handleExecute() {
    await execute({
      input: "Create workspace action",
      userId: "demo-user",
    });
  }

  return (
    <section>
      <button
        type="button"
        onClick={handleExecute}
        disabled={loading}
      >
        {loading
          ? "Executing..."
          : "Execute Action"}
      </button>

      {result && (
        <p>
          {result.message}
        </p>
      )}
    </section>
  );
}