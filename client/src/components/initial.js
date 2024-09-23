import React from 'react';
import '../assets/css/initial.css'
import { useNavigate } from 'react-router-dom';
const Initial = ()=>{
    const navigate = useNavigate()
    const navigationsignup = ()=>{
     
        navigate('/signup')
    }
    const navigationlogin = ()=>{
        navigate('/login')
    }
    return(
        <div id='initial-main-div'>
            <h1 id='initial-h1'>RECIPE BOOK</h1>
        <div id='initial-div1'>
           <span>New to recipe book ?</span>
           <button onClick={navigationsignup}>Signup</button>
        </div>
        <div id='initial-div2'>
           <span>Already have an account ?</span>
           <button onClick={navigationlogin}>Login</button>
        </div>
        </div>
    )
}
export default Initial;