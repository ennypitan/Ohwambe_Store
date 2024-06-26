import styles from "./footer.module.css";
import footerLogo from "../Assets/secondary_logo.png";
import { FaInstagramSquare } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaSquarePinterest,
  FaSquareWhatsapp,
  FaSquareGithub,
} from "react-icons/fa6";

// function mk(type, props, children) {
//   const element = document.createElement(type);
//   if (props) Object.assign(element, props);
//   if (children) element.prepend(...children);
//   return element;
// }

// return (
//   mk("form", { id: "form" }),
//   [mk("input"), mk("button", { type: "submit" }, ["add todo"])]
// );

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
        <div className={styles["under__footer"]}>
          Copyright @ 2024 - Developed by Ennypitan
          <li>
            <a href="https://twitter.com/Ennipitan" target="_blank">
              <FaSquareXTwitter
                style={{ width: "1.5rem", height: "1.5rem", color: "black" }}
              />
            </a>
            <a href="https://github.com/ennypitan" target="_blank">
              <FaSquareGithub
                style={{ width: "1.5rem", height: "1.5rem", color: "black" }}
              />
            </a>
          </li>
        </div>
      </div>
    </>
  );
};
export default Footer;
