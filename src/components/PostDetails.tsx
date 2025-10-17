import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import type { PostType } from "../types";

function PostDetails() {
  const { id } = useParams<{ id: string }>();
  const { fetchedData, error, isLoading } = useFetch<PostType>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return (
    <div>
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader />}
      {!error && !isLoading && (
        <div>
          <h1>Post</h1>
          <h2>{fetchedData?.title}</h2>
          <p>{fetchedData?.body}</p>
        </div>
      )}
    </div>
  );
}

export default PostDetails;
