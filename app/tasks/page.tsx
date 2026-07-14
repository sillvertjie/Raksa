"use client";

import { TaskCreateForm } from "@/features/tasks/components/task-create-form";
import { TaskList } from "@/features/tasks/components/task-list";
import { useTasks } from "@/features/tasks/hooks/useTasks";


export default function TasksPage() {
  const {
    tasks,
    loading,
    createTask,
  } = useTasks();


  if (loading) {
    return (
      <main className="p-6">
        Loading tasks...
      </main>
    );
  }


  return (
    <main className="space-y-6 p-6">
      <header>
        <h1 className="text-2xl font-bold">
          Tasks
        </h1>

        <p className="text-sm text-gray-600">
          Manage your workspace tasks.
        </p>
      </header>


      <TaskCreateForm
        onSubmit={async (dto) => {
          await createTask(dto);
        }}
      />


      <TaskList
        tasks={tasks}
      />
    </main>
  );
}