import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './components/signup';
import Login from './components/Login';
import Home from './components/Home';
import Veg from './components/veg';
import Nonveg from './components/nonveg';
import Viewrecipe from './components/view-recipe';
import Initial from './components/initial';
import Addrecipe from './components/newrecipe';
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Initial/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/veg' element={<Veg/>}/>
          <Route path='/nonveg' element={<Nonveg/>}/>
          <Route path='/signup' element={<Signup/>}/>
           <Route path='/viewrecipe' element={<Viewrecipe/>}></Route>
           <Route path='/newrecipe' element={<Addrecipe/>}/>
         </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
