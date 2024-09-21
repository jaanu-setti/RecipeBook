import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './components/signup';
import Login from './components/Login';
import Home from './components/Home';
import Veg from './components/veg';
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/veg' element={<Veg/>}/>
         </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
