import React, { useState } from "react";
import styles from "./starRating.module.css";
import { FaStar, FaRegStar } from "react-icons/fa6";

function StarRating() {
  const [rating, setRating] = useState(null);
  //   function range(start, end, step = 1) {
  //     let output = [];

  //     if (typeof end === "undefined") {
  //       end = start;
  //       start = 0;
  //     }
  //     for (let i = start; i < end; i += step) {
  //       output.push(i);
  //     }
  //     return output;
  //   }
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const starValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={starValue}
              onClick={() => setRating(starValue)}
            />
            <FaStar
              className={styles.star}
              color={starValue <= rating ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
