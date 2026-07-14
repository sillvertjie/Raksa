import Link from "next/link";

import type { TaskResponse } from "../api/tasks.api";

type Props = {
  task: TaskResponse;
};

export function TaskCard({
  task,
}: Props) {
  return (
    <Link
      href={`/tasks/${task.id}`}
      className="block"
    >
      <article className="rounded-lg border p-4">
        <h3 className="font-semibold">
          {task.title}
        </h3>

        <p className="text-sm text-gray-600">
          {task.description ??
            "No description"}
        </p>

        <div className="flex gap-2 text-xs">
          <span>
            {task.status}
          </span>

          <span>
            {task.priority}
          </span>
        </div>
      </article>
    </Link>
  );
}