import styles from "./newsletter.module.css";
import newImg from "../Assets/newletterImg.jpg";
const NewsLetter = () => {
  return (
    <>
      <div className={`${styles["flex-row"]} ${styles["newsletter-section"]}`}>
        <div className={styles["flex-container"]}>
          <div className={styles["news__lcard"]}>
            <div className="img__holder">
              <img src={newImg} alt="" />
            </div>
          </div>
          <div className={styles["news__rcard"]}>right news letter</div>
        </div>
      </div>
    </>
  );
};
export default NewsLetter;
