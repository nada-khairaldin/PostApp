import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import type { PostType } from "../../types";
import PostAuthor from "../../components/PostAuthor/PostAuthor";
import Comments from "../../components/Comments/Comments";
import styles from "./PostDetailsPage.module.css";
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
