import "./App.scss";
import ToDoWraper from "./components/ToDoWrapper/ToDoWraper";

import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <title>My Productive Day App</title>
        <link
          rel="icon"
          type="image/png"
          href="./assets/favicon app.png"
        />
      </Helmet>
      <div className="alltodo__App">
        <h1 className="title">Mes taches pour aujourd'hui </h1>
        <ToDoWraper />
      </div>

      <Footer />
    </>
  );
}

export default App;
