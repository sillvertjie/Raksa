import type { TaskRepository } from "../contracts/task-repository.interface";
import type { TaskService } from "../contracts/task-service.interface";
import type { CreateTaskDto } from "../dto/create-task.dto";
import type { UpdateTaskDto } from "../dto/update-task.dto";
import type { Task } from "../entities/task.entity";

export class DefaultTaskService implements TaskService {
  constructor(
    private readonly repository: TaskRepository,
  ) {}

  async create(dto: CreateTaskDto): Promise<Task> {
    const now = new Date();

    const task: Task = {
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
      title: dto.title.trim(),
      description: dto.description ?? null,
      status: "TODO",
      priority: dto.priority ?? "MEDIUM",
      projectId: dto.projectId ?? null,
    };

    return this.repository.create(task);
  }

  async update(
    id: string,
    dto: UpdateTaskDto,
  ): Promise<Task> {
    const task = await this.repository.findById(id);

    if (!task) {
      throw new Error("Task not found.");
    }

    const updated: Task = {
      ...task,
      ...dto,
      updatedAt: new Date(),
    };

    return this.repository.update(updated);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async getById(id: string): Promise<Task | null> {
    return this.repository.findById(id);
  }

  async getAll(): Promise<Task[]> {
    return this.repository.findAll();
  }
}