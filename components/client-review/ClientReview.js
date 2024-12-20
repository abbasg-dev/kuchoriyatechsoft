import styles from "./ClientReview.module.css";

const ClientReview = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.cardView}>
        <div className={styles.openQuote}>
          <img className={styles.imageWidth} src={"/quote-open.svg"} />
        </div>
        <label className={styles.label}>{props.review.opinion}</label>
        <div className={styles.closeQuote}>
          <img className={styles.imageWidth} src={"/quote-close.svg"} />
        </div>
      </div>
      <div className={styles.clientInfo}>
        <label className={styles.name}>{props.review.name}</label>
        <label className={styles.job}>{props.review.job}</label>
      </div>
    </div>
  );
};

export default ClientReview;
