import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className= {styles["post-placeholder"]}>
      <div className={styles.title}></div>
      <div className={styles.body}></div>
    </div>
  );
}

export default Loader;
