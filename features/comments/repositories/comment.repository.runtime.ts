import { InMemoryCommentRepository } from "./comment.repository";

declare global {
  var raksaCommentRepository:
    | InMemoryCommentRepository
    | undefined;
}

export function getCommentRepository() {
  if (!global.raksaCommentRepository) {
    global.raksaCommentRepository =
      new InMemoryCommentRepository();
  }

  return global.raksaCommentRepository;
}