import "./App.scss";
import ToDoWraper from "./components/ToDoWrapper/ToDoWraper";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "./components/Footer/Footer";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import Loader from "./components/Loader/Loader";
import { useEffect,useState } from "react";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
         
          <title>My Productive Day App</title>
          <link rel="icon" type="image/png" href="./assets/favicon app.png" />
        </Helmet>
        <div className="alltodo__App">
        {showLoader?<Loader />:
        <> <ToDoForm />
        <ToDoWraper /></>
         
        }
        </div>

        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;
