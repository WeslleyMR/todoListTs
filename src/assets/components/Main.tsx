// Styles
import styles from "./Main.module.css";

interface Props {
  btnText: string;
}

const Main = ({ btnText }: Props) => {
  return (
    <div>
      <main className={styles.main}>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Título" />
          <input className={styles.input} type="text" placeholder="Descrição" />
          <input
            className={styles["submitForm"]}
            type="submit"
            value={btnText}
          />
        </form>
      </main>
    </div>
  );
};

export default Main;
