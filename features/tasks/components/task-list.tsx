import type { TaskResponse } from "../api/tasks.api";

import { TaskCard } from "./task-card";


type Props = {
  tasks: TaskResponse[];
};


export function TaskList({
  tasks,
}: Props) {
  if (tasks.length === 0) {
    return (
      <p>
        No tasks found.
      </p>
    );
  }

  return (
    <section className="grid gap-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </section>
  );
}