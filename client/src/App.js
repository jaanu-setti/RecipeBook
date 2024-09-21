import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './components/signup';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
         </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
