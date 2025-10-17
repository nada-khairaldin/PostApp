import Posts from "./Posts/Posts";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import styles from "./PostContainer.module.css";
import useFetch from "../hooks/useFetch";
import type { PostType } from "../types";

function PostContainer() {
  const { fetchedData, error, isLoading } = useFetch<PostType[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className={styles["posts-container"]}>
      <h1>Posts</h1>
      {!fetchedData && <Loader />}
      {isLoading && <Loader />}
      {!isLoading && error && <ErrorMessage message={error} />}
      {!isLoading && !error && <Posts posts={fetchedData} />}
    </div>
  );
}

export default PostContainer;
