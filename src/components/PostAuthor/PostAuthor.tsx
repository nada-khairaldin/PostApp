import useFetch from "../../hooks/useFetch";
import type { AuthorType } from "../../types";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import styles from "./PostAuthor.module.css";
import { FaUser, FaEnvelope, FaBuilding } from "react-icons/fa";

function PostAuthor({ authorId }: { authorId: number }) {
  const { fetchedData, error, isLoading } = useFetch<AuthorType>(
    `https://jsonplaceholder.typicode.com/users/${authorId}`
  );

  return (
    <div>
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader />}
      {!error && !isLoading && (
        <div className={styles.details}>
          <p className={styles.name}>
            <FaUser /> {fetchedData?.name}
          </p>
          <p className={styles.email}>
            <FaEnvelope />
            <a href={`mailto:${fetchedData?.email}`}>{fetchedData?.email}</a>
          </p>
          <p className={styles.company}>
            <FaBuilding /> {fetchedData?.company.name}
          </p>
        </div>
      )}
    </div>
  );
}

export default PostAuthor;
