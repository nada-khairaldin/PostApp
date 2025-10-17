
import { Link } from "react-router-dom";
import type { PostType } from "../../types";
import styles from "./Post.module.css";
function Post({ post }: { post: PostType }) {
  return (
    <Link to={`/posts/${post.id}`}>
    <li className={styles.post}>
      <h3 className={styles["post-heading"]}>{post.title}</h3>
      <p className={styles["post-paragraph"]}>{post.body.slice(0, 99)}...</p>
    </li>
    </Link>
  );
}

export default Post;
