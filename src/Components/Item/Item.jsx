import React from "react";
import styles from "./item.module.css";
import StarRating from "../StarRating/StarRating";

function Item({ title, image, new_price, old_price, rating }) {
  return (
    <>
      <div className={styles["item__card"]}>
        <div className={styles["item-img-holder"]}>
          <img src={image} alt="" style={{ objectFit: "contain" }} />
          <div className={styles["item__info"]}>
            <p>{title}</p>
            <div className={styles["price-container"]}>
              <p>{new_price}</p>
              <p>{old_price}</p>
            </div>
            <StarRating rating={rating} />
            <button className={styles["cart__btn"]}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
