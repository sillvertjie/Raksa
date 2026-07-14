import type { EventBus } from "../../shared/contracts/event-bus.interface";
import type { TaskRepository } from "../contracts/task-repository.interface";
import type { TaskService } from "../contracts/task-service.interface";
import type { CreateTaskDto } from "../dto/create-task.dto";
import type { UpdateTaskDto } from "../dto/update-task.dto";
import type { Task } from "../entities/task.entity";
import { TaskCreatedEvent } from "../events/task-created.event";
import { TaskUpdatedEvent } from "../events/task-updated.event";
import { TaskDeletedEvent } from "../events/task-deleted.event";

export class DefaultTaskService implements TaskService {
  constructor(
    private readonly repository: TaskRepository,
    private readonly eventBus: EventBus,
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

    const created = await this.repository.create(task);

    this.eventBus.publish(
      new TaskCreatedEvent({
        taskId: created.id,
      }),
    );

    return created;
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

    const result = await this.repository.update(updated);

    this.eventBus.publish(
      new TaskUpdatedEvent({
        taskId: result.id,
      }),
    );

    return result;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);

    this.eventBus.publish(
      new TaskDeletedEvent({
        taskId: id,
      }),
    );
  }

  async getById(id: string): Promise<Task | null> {
    return this.repository.findById(id);
  }

  async getAll(): Promise<Task[]> {
    return this.repository.findAll();
  }
}