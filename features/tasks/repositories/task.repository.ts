import type { TaskRepository } from "../contracts/task-repository.interface";
import type { Task } from "../entities/task.entity";

export class InMemoryTaskRepository implements TaskRepository {
  private readonly tasks = new Map<string, Task>();

  async create(task: Task): Promise<Task> {
    this.tasks.set(task.id, task);

    return task;
  }

  async update(task: Task): Promise<Task> {
    this.tasks.set(task.id, task);

    return task;
  }

  async delete(id: string): Promise<void> {
    this.tasks.delete(id);
  }

  async findById(id: string): Promise<Task | null> {
    return this.tasks.get(id) ?? null;
  }

  async findAll(): Promise<Task[]> {
    return [...this.tasks.values()];
  }
}