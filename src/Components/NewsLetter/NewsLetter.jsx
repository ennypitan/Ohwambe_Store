import styles from "./newsletter.module.css";
import newImg from "../Assets/newletterImg.jpg";
const NewsLetter = () => {
  return (
    <>
      <div className={`${styles["flex-row"]} ${styles["newsletter__section"]}`}>
        <div className={styles["flex-container"]}>
          <div className={styles["news__lcard"]}>
            <div className={styles["img__holder"]}>
              <img src={newImg} alt="" />
            </div>
          </div>
          <div className={styles["news__rcard"]}>
            <div className={styles["news__card__text"]}>
              Get Exclusive Offers On Your Email
            </div>
            <p>Subscribe to our news later and stay updated</p>
            <form action="">
              <input type="text" placeholder="Enter your email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsLetter;
