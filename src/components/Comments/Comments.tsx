import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import type { commentType } from "../../types";
import Comment from "../Comment/Comment";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import styles from "./Comments.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";

function Comments({ postId }: { postId: string }) {
  const { fetchedData, error, isLoading } = useFetch<commentType[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  // if(!fetchedData) return <></>

  return (
    <div>
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader />}
      {!error && !isLoading && (
        <div className={styles["comments-container"]}>
          <h3 className={styles["comments-section-heading"]}>Comments</h3>
          <ul className={styles["comments-list"]}>
            {fetchedData && fetchedData.length > 0 ? (
              fetchedData.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))
            ) : (
              <p>No comments</p>
            )}
          </ul>
          <Link to="/">
            <FaArrowLeftLong className={styles.backButton} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Comments;
