//Style
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header>
        <div>
          <h1 className={styles.title}>Todo TS</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
