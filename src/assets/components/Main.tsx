//Imports
import ReactDOM from "react-dom";
// Styles
import styles from "./Main.module.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

// Interfaces
import { ITask } from "../../Task";
import { useState, type ChangeEvent, type FormEvent } from "react";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const Main = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = { id, title, desc };

    setTaskList!([...taskList, newTask]);
    setTitle("");
    setDesc("");

    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDesc(e.target.value);
    }
  };
  return (
    <div>
      <main className={styles.main}>
        <form onSubmit={addTaskHandler} className={styles.form}>
          <input
            className={styles.input}
            name="title"
            type="text"
            placeholder="Título"
            onChange={handleChange}
            value={title}
          />
          <input
            className={styles.input}
            name="desc"
            type="text"
            placeholder="Descrição"
            onChange={handleChange}
            value={desc}
          />
          <input
            className={styles["submitForm"]}
            type="submit"
            value={btnText}
          />
        </form>
        <p>
          {taskList.length > 0 ? (
            taskList.map((task) => (
              <div key={task.id} className={styles.task}>
                <div className={styles.titleAndDesc}>
                  <h4>{task.title}</h4>
                  <p>{task.desc}</p>
                </div>
                <div className={styles.actions}>
                  <i>
                    <FontAwesomeIcon icon={faTrash} />
                  </i>
                  <i>
                    <FontAwesomeIcon icon={faPen} />
                  </i>
                </div>
              </div>
            ))
          ) : (
            <p>não tá listando</p>
          )}
        </p>
      </main>
    </div>
  );
};

export default Main;
