import React from "react";
import styles from "./offer.module.css";
import offerBgImg from "../Assets/offer.png";

function Offer() {
  return (
    <>
      <div className={`${styles["flex-row"]} ${styles["offer__container"]}`}>
        <div className={styles["flex-container"]}>
          <div className={styles["l__offer__card"]}>
            <div className={styles["offer__tag"]}>Exclusive Offer</div>
            <div className={styles["offer__tag"]}>Made For You</div>
            <button className={styles["offer__btn"]}>Check Now</button>
          </div>
          <div className={styles["r__offer__card"]}>
            <img src={offerBgImg} alt="offer image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
