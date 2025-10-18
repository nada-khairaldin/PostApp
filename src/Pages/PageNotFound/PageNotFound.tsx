import styles from "./PageNotFound.module.css";
function PageNotFound() {
  return (
    <div className={styles["notfound-container"]}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/" className={styles["back-button"]}>
        Go Back Home
      </a>
    </div>
  );
}

export default PageNotFound;
