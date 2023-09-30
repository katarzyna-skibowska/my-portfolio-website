import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <nav className={styles.wrapper}>
        <ul className={styles.navBox}>
          <li>
            <NavLink to="/about-me" className={styles.navLink}>
              O mnie
            </NavLink>
          </li>

          <li>
            <NavLink to="/skills" className={styles.navLink}>
              Umiejętności
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={styles.navLink}>
              Projekty
            </NavLink>
          </li>
          <li className={styles.navItemPosition}>
            <NavLink to="/contact" className={styles.navLink}>
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
