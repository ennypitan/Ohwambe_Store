import { NavLink, Link } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../Assets/owanbe.png";
// import cart from "../Assets/cart.svg";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function NavBar() {
  return (
    <>
      <div className={`${styles["flex-row"]} ${styles.navbar}`}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={styles["nav-menu"]}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="men"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              to="women"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              to="kids"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Kids
            </NavLink>
          </li>
        </ul>
        <div className={styles["nav-cart"]}>
          <Link to="login">
            <button className={styles["login-btn"]}>Login</button>
          </Link>
          <Link to="cart">
            <HiOutlineShoppingCart style={{ fontSize: "30px" }} />
          </Link>
          <div className={styles["nav-cart-counter"]}>0</div>
        </div>
      </div>
    </>
  );
}
