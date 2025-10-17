import styles from "./ErrorMessage.module.css";
function ErrorMessage({ message }: { message: string }) {
  return (
    <div className={styles["error-box"]}>
      <span className={styles["error-icon"]}>⚠️</span>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
