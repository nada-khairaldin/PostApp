import Post from "./Post";
import type {PostType} from "../types";
import styles from "./Posts.module.css"
function Posts({ posts }: { posts: PostType[] }) {
  return (
    <ul className={styles["post-list"]}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default Posts;
