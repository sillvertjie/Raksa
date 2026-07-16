/**
 * Global Domain Event Contract
 *
 * Event naming convention:
 * <aggregate>.<action>
 *
 * Examples:
 * - task.created
 * - task.updated
 * - file.uploaded
 *
 * All domain events must provide a strongly typed payload.
 */
export interface DomainEvent<TPayload = unknown> {
  readonly type: string;
  readonly occurredAt: Date;
  readonly payload: TPayload;
}