export interface UpdateTaskDto {
  title?: string;
  description?: string | null;
  status?: "TODO" | "IN_PROGRESS" | "DONE";
  priority?: "LOW" | "MEDIUM" | "HIGH";
  projectId?: string | null;
}