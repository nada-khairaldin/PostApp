
import type { PostType } from "../types";
import styles from "./Post.module.css";
function Post({ post }: { post: PostType }) {
  return (
    <li className={styles.post}>
      <h3 className={styles["post-heading"]}>{post.title}</h3>
      <p className={styles["post-paragraph"]}>{post.body.slice(0, 99)}...</p>
    </li>
  );
}

export default Post;
