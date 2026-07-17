import type { MembershipRepository } from "../contracts/membership-repository.interface";
import type { MembershipService } from "../contracts/membership-service.interface";
import type { CreateMembershipDto } from "../dto/create-membership.dto";
import type { WorkspaceMembership } from "../entities/workspace-membership.entity";

import { MembershipValidator } from "../validators/membership.validator";

export class DefaultMembershipService
  implements MembershipService
{
  constructor(
    private readonly repository: MembershipRepository,
  ) {}

  async create(
    dto: CreateMembershipDto,
  ): Promise<WorkspaceMembership> {
    MembershipValidator.validateCreate(dto);

    const now = new Date();

    const membership: WorkspaceMembership = {
      id: crypto.randomUUID(),
      workspaceId: dto.workspaceId,
      userId: dto.userId,
      role: dto.role,
      status: "ACTIVE",
      createdAt: now,
      updatedAt: now,
    };

    return this.repository.create(membership);
  }

  async remove(
    id: string,
  ): Promise<void> {
    await this.repository.delete(id);
  }

  async getById(
    id: string,
  ): Promise<WorkspaceMembership | null> {
    return this.repository.findById(id);
  }

  async getByWorkspace(
    workspaceId: string,
  ): Promise<WorkspaceMembership[]> {
    return this.repository.findByWorkspace(workspaceId);
  }
}