import useFetch from "../../hooks/useFetch";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import type { PostType } from "../../types";
import PostAuthor from "../../components/PostAuthor/PostAuthor";
import Comments from "../../components/Comments/Comments";
import styles from "./PostDetailsPage.module.css";
import { useParams } from "react-router-dom";

function PostDetailsPage() {
  const { id } = useParams();
  const { fetchedData, error, isLoading } = useFetch<PostType>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const authorId = fetchedData?.userId;

  return (
    <div className={styles["post-container"]}>
      {error && <ErrorMessage message={error} />}

      {isLoading && <Loader />}

      {!isLoading && !error && !fetchedData && (
        <p className={styles["no-post-message"]}>Post not found</p>
      )}

      {!error && !isLoading && (
        <>
          <h1 className={styles["post-heading"]}>{fetchedData?.title}</h1>

          {authorId && <PostAuthor authorId={authorId} />}

          <p className={styles["post-content"]}>{fetchedData?.body}</p>

          {id && <Comments postId={id} />}
        </>
      )}
    </div>
  );
}

export default PostDetailsPage;
