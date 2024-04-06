import styles from "../HeroSection/heroSection.module.css";
import React from "react";
import HeroImg from "../Assets/HeroImg.png";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

function HeroSection() {
  return (
    <div className={`${styles["flex-row"]} ${styles["hero-section"]}`}>
      <div className={styles["flex-container"]}>
        <div className={styles["left-card"]}>
          <p className={styles["hero_tag"]}> Dress to impress</p>
          <p className={styles["hero_text"]}>handcrafted traditional attire!</p>
          <p className={styles["hero_under_text"]}>
            No allow anyone tell you say Semo and Amala are for special guests.
            Dress like say na you be the chairperson of the occassion.
          </p>
          <div>
            <button className={styles["primary_btn"]}>Shop Now</button>
            <button className={styles["CTA_btn"]}>
              <FaGooglePlay /> | <GrAppleAppStore />
              Download
            </button>
          </div>
        </div>
        <div className={styles["right-card"]}>
          <div className={styles["hero-img-holder"]}>
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
