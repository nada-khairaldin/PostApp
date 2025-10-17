import useFetch from "../hooks/useFetch";
import type { AuthorType } from "../types";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";

function PostAuthor({ authorId }: { authorId: number }) {
  const { fetchedData, error, isLoading } = useFetch<AuthorType>(
    `https://jsonplaceholder.typicode.com/users/${authorId}`
  );

  return (
    <div>
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader />}
      {!error && !isLoading && (
        <div>
          <h3>Author</h3>
          <p>{fetchedData?.name}</p>
          <p>{fetchedData?.email}</p>
          <h3>Company</h3>
          <p>{fetchedData?.company.name}</p>
        </div>
      )}
    </div>
  );
}

export default PostAuthor;
