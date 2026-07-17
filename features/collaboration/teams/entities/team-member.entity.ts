import type { BaseEntity } from "@/features/shared/contracts/base-entity.interface";

export interface TeamMember extends BaseEntity {
  teamId: string;
  membershipId: string;
}