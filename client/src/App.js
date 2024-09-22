import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './components/signup';
import Login from './components/Login';
import Home from './components/Home';
import Veg from './components/veg';
import Viewrecipe from './components/view-recipe';
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/veg' element={<Veg/>}/>
           <Route path='/viewrecipe' element={<Viewrecipe/>}></Route>
         </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
