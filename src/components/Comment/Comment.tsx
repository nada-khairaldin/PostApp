import type { commentType } from "../../types";

function Comment({ comment }: { comment: commentType }) {
  return (
    <div>
      <h3>{comment.name}</h3>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
      comment
    </div>
  );
}

export default Comment;
