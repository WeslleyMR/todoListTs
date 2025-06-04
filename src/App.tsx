//Style
import "./App.css";

//Components
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";

function App() {
  return (
    <div>
      <Header />
      <Main btnText="Criar tarefa" />
      <Footer />
    </div>
  );
}

export default App;
