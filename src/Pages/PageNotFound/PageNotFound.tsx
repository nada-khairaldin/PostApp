import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";
function PageNotFound() {
  return (
    <div className={styles["notfound-container"]}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className={styles["back-button"]}>
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
