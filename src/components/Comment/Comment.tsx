import type { commentType } from "../../types";
import styles from "./Comment.module.css";

function Comment({ comment }: { comment: commentType }) {
  return (
    <li className={styles["comment-container"]}>
      <h3>{comment.name}</h3>
      <p className={styles.email}>
        <a href={`mailto:${comment.email}`}>{comment.email}</a>
      </p>
      <p className={styles.body}>{comment.body}</p>
    </li>
  );
}

export default Comment;
