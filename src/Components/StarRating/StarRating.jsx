import React from "react";
import { FaStar } from "react-icons/fa6";

function StarRating({ rating }) {
  function range(start, end, step = 1) {
    let output = [];

    if (typeof end === "undefined") {
      end = start;
      start = 0;
    }
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
    return output;
  }
  return (
    <div>
      {range(rating).map((star) => {
        return <FaStar key={crypto.randomUUID()} />;
      })}
    </div>
  );
}

export default StarRating;
