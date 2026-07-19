import { getEventBus } from "@/features/shared/event-bus/event-bus.runtime";

import {
  permissionEvaluationService,
} from "@/features/collaboration/access/collaboration-access.runtime";

import { getCommentRepository } from "../repositories/comment.repository.runtime";

import { CommentCommandService } from "../services/comment-command.service";
import { CommentQueryService } from "../services/comment-query.service";


type CommentApiRuntime = {
  commandService: CommentCommandService;
  queryService: CommentQueryService;
};


declare global {
  var commentApiRuntime:
    | CommentApiRuntime
    | undefined;
}


function createCommentApiRuntime(): CommentApiRuntime {
  const repository =
    getCommentRepository();

  const eventBus =
    getEventBus();


  const commandService =
    new CommentCommandService(
      repository,
      permissionEvaluationService,
      eventBus,
    );


    const queryService =
    new CommentQueryService(
        repository,
        permissionEvaluationService,
    );


  return {
    commandService,
    queryService,
  };
}


export function getCommentApiRuntime() {
  if (!global.commentApiRuntime) {
    global.commentApiRuntime =
      createCommentApiRuntime();
  }

  return global.commentApiRuntime;
}