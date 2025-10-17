import useFetch from "../../hooks/useFetch";
import type { commentType } from "../../types";
import Comment from "../Comment/Comment";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

function Comments({ postId }: { postId: string }) {
  const { fetchedData, error, isLoading } = useFetch<commentType[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  return (
    <div>
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader />}
      {!error && !isLoading && (
        <div>
          <h3>Comments:</h3>
          <ul>
            {fetchedData?.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </ul>
        </div>
      )}
      ;
    </div>
  );
}

export default Comments;
