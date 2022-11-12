
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Movieslist from './Component/Movieslist/Movieslist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
  
        <Route  path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movieslist/>}/>
      </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
