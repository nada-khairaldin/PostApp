import Posts from "../../components/Posts/Posts";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import styles from "./PostsPage.module.css";
import useFetch from "../../hooks/useFetch";
import type { PostType } from "../../types";

function PostsPage() {
  const { fetchedData, error, isLoading } = useFetch<PostType[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className={styles["posts-container"]}>
      <h1 className={styles["post-heading"]}>Posts</h1>
      {isLoading && (
        <>
          <Loader /> <Loader />
        </>
      )}
      {!isLoading && error && <ErrorMessage message={error} />}
      {!isLoading && !error && fetchedData && <Posts posts={fetchedData} />}
    </div>
  );
}

export default PostsPage;
