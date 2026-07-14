export interface CreateTaskDto {
  title: string;
  description?: string | null;
  priority?: "LOW" | "MEDIUM" | "HIGH";
  projectId?: string | null;
}