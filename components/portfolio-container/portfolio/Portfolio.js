import styles from "./Portfolio.module.css";

const Portfolio = (props) => {
  return (
    <div className={styles.root} key={props.index}>
      <div className={styles.textContent}>
        <label className={styles.title}>{props.title}</label>
        <label className={styles.subtitle}>{props.subtitle}</label>
      </div>
    </div>
  );
};

export default Portfolio;
