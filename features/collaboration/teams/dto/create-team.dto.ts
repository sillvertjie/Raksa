export interface CreateTeamDto {
  workspaceId: string;
  name: string;
  description?: string | null;
}