import styles from "./footer.module.css";
import footerLogo from "../Assets/secondary_logo.png";
import { FaInstagramSquare } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaSquarePinterest,
  FaSquareWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className={`${styles["flex-row"]} ${styles["footer"]}`}>
        <div className={styles["flex-container"]}>
          <div className={styles["footer__logo"]}>
            <img src={footerLogo} alt="" />
          </div>
          <ul className={styles["footer__menu"]}>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
          <ul className={styles["social_container"]}>
            <li>
              <FaInstagramSquare style={{ width: "2rem", height: "2rem" }} />
            </li>
            <li>
              <FaSquareXTwitter style={{ width: "2rem", height: "2rem" }} />
            </li>
            <li>
              <FaSquarePinterest style={{ width: "2rem", height: "2rem" }} />
            </li>
            <li>
              <FaSquareWhatsapp style={{ width: "2rem", height: "2rem" }} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Footer;
