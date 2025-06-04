//Style
import { useState } from "react";
import "./App.css";

//Components
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";

//Interfaces
import { ITask } from "./Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div>
      <Header />
      <Main
        btnText="Criar tarefa"
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Footer />
    </div>
  );
}

export default App;
