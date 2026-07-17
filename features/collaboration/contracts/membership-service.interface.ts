import type { CreateMembershipDto } from "../dto/create-membership.dto";
import type { WorkspaceMembership } from "../entities/workspace-membership.entity";

export interface MembershipService {
  create(
    dto: CreateMembershipDto,
  ): Promise<WorkspaceMembership>;

  remove(
    id: string,
  ): Promise<void>;

  getById(
    id: string,
  ): Promise<WorkspaceMembership | null>;

  getByWorkspace(
    workspaceId: string,
  ): Promise<WorkspaceMembership[]>;
}