import React from "react";
import styles from "./clients.module.css";
import mtnLogo from "../Assets/MTN.png";
import hotelsLogo from "../Assets/Hotels.png";
import ibomLogo from "../Assets/Ibom.png";
import terraLogo from "../Assets/Terra.png";
import altschoolLogo from "../Assets/AltSchool.png";
import mttLogo from "../Assets/3ttm.png";

function Clients() {
  return (
    <>
      <p className={styles["p_tag"]}>Some of Our Trusted Clients/Partners</p>
      <div className={`${styles["flex-row"]} ${styles["clients-section"]}`}>
        <div className={styles["flex-container"]}>
          <div className={styles["hero-img-holder"]}>
            <img src={altschoolLogo} alt="AltSckool Logo" />
          </div>
          <div className={styles["hero-img-holder"]}>
            <img src={mttLogo} alt="AltSckool Logo" />
          </div>
          <div className={styles["hero-img-holder"]}>
            <img src={mtnLogo} alt="MTN Logo" />
          </div>
          <div className={styles["hero-img-holder"]}>
            <img src={hotelsLogo} alt="hotels.ng Logo" />
          </div>
          <div className={styles["hero-img-holder"]}>
            <img src={ibomLogo} alt="Ibom Air Logo" />
          </div>
          <div className={styles["hero-img-holder"]}>
            <img src={terraLogo} alt="Terra Logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
