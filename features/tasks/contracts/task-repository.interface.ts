import type { Task } from "../entities/task.entity";

export interface TaskRepository {
  create(task: Task): Promise<Task>;

  update(task: Task): Promise<Task>;

  delete(id: string): Promise<void>;

  findById(id: string): Promise<Task | null>;

  findAll(): Promise<Task[]>;
}