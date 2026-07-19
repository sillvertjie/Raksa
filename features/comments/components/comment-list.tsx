import type {
  CommentResponse,
} from "../api/comment.api";


type Props = {
  comments: CommentResponse[];
};


export function CommentList({
  comments,
}: Props) {

  if (comments.length === 0) {
    return (
      <p>
        No comments found.
      </p>
    );
  }


  return (
    <section className="grid gap-4">
      {comments.map((comment) => (
        <article
          key={comment.id}
          className="rounded border p-4"
        >
          <p className="text-sm">
            {comment.normalizedText ||
              "Comment content"}
          </p>

          <span className="text-xs text-gray-500">
            {comment.authorId}
          </span>
        </article>
      ))}
    </section>
  );
}