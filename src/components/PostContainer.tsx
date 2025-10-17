import { useState, useEffect } from "react";
import Posts from "./Posts";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import styles from "./PostContainer.module.css";
import axios from "axios";

function PostContainer() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(res.data);
      } catch (err) {
        if (typeof err === "string") setError(err);
        else if (err instanceof Error) setError(err.message);
        else setError("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div className={styles["posts-container"]}>
      <h1>Posts</h1>
      {isLoading && <Loader />}
      {!isLoading && error && <ErrorMessage message={error} />}
      {!isLoading && !error && <Posts posts={posts} />}
    </div>
  );
}

export default PostContainer;
