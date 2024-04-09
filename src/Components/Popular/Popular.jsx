import React from "react";
import data_products from "../Assets/data";
import Item from "../Item/Item";
import styles from "./popular.module.css";

function Popular() {
  return (
    <>
      <div className={styles["popular-section"]}>
        <div className={styles["popular__title"]}>Popular In women</div>
        <div className={`${styles["flex-row"]} ${styles["item__container"]}`}>
          <div className={styles["flex-container"]}>
            {data_products.map((item, index) => {
              return <Item key={index} id={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular;
