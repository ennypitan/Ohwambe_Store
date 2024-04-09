import React from "react";
import styles from "./newCollections.module.css";
import Item from "../Item/Item";
import new_collections from "../Assets/new_collections";

function NewCollections() {
  return (
    <>
      <div className={styles["newcollection__title"]}>New collections</div>
      <div
        className={`${styles["flex-row"]} ${styles["newcollect__container"]}`}
      >
        <div className={styles["flex-container"]}>
          {new_collections.map((item, index) => {
            return <Item key={index} id={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default NewCollections;
