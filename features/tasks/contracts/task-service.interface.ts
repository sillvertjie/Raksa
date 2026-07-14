import type { CreateTaskDto } from "../dto/create-task.dto";
import type { UpdateTaskDto } from "../dto/update-task.dto";
import type { Task } from "../entities/task.entity";

export interface TaskService {
  create(dto: CreateTaskDto): Promise<Task>;

  update(id: string, dto: UpdateTaskDto): Promise<Task>;

  delete(id: string): Promise<void>;

  getById(id: string): Promise<Task | null>;

  getAll(): Promise<Task[]>;
}