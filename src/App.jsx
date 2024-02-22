import "./App.scss";
import ToDoWraper from "./components/ToDoWrapper/ToDoWraper";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from "./components/Footer/Footer";
import ToDoForm from "./components/ToDoForm/ToDoForm";

function App() {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>My Productive Day App</title>
        <link
          rel="icon"
          type="image/png"
          href="./assets/favicon app.png"
        />
      </Helmet>
      <div className="alltodo__App">
      <ToDoForm />
      <ToDoWraper />
      </div>

      <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;
