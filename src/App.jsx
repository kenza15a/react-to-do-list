
import { Provider } from 'react-redux';
import './App.scss';
import ToDoWraper from './components/ToDoWrapper/ToDoWraper';
import store from './redux/store';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <>
   <div className='alltodoApp'>
   <h1 className='title'>Mes taches pour aujourd'hui </h1>
   <ToDoWraper/>
   
   </div>
   
   <Footer/>
  
   </>
  );

}

export default App;
