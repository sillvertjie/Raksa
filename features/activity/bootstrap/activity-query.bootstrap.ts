import type { QueryBus } from "../../shared/contracts/query-bus.interface";

import { ListActivityQueryHandler } from "../handlers/list-activity.query-handler";

import { DefaultActivityQueryService } from "../services/activity-query.service";

import { getActivityRepository } from "../repositories/activity.repository.runtime";

import { permissionEvaluationService } from "@/features/collaboration/access/collaboration-access.runtime";


export function registerActivityQueries(
  queryBus: QueryBus,
): void {
  const repository =
    getActivityRepository();

  const service =
    new DefaultActivityQueryService(
      repository,
      permissionEvaluationService,
    );

  queryBus.register(
    "activity.list",
    new ListActivityQueryHandler(
      service,
    ),
  );
}

/**
 * Activity Query Bootstrap
 *
 * Menghubungkan:
 *
 * QueryBus
 *    ↓
 * ListActivityQueryHandler
 *    ↓
 * ActivityQueryService
 *    ↓
 * ActivityRepository
 *
 * Permission Evaluation Service digunakan sebagai
 * Authorization Boundary.
 *
 * Projection layer tidak mengetahui authorization.
 * Filtering dilakukan saat query.
 */