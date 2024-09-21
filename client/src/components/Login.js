import React,{useState} from "react";
import '../assets/css/login.css'
import {useNavigate} from 'react-router-dom'
export default function Login(){
    const [logindata , setLogindata]=useState('');
    const loginchange=(e)=>{
    setLogindata({
        ...logindata,
        [e.prevent.name]:e.prevent.value
    })
    }
    const navigate = useNavigate();
    const signup = ()=>{
        navigate('/signup')
    }
    const loginhandler = ()=>{
        navigate('/home')
    }
    return(
        <div>
            <form id="login-form">
                <h2 id="login-h2">Login Form</h2>
                <input id="login-email" type="email" name="email" placeholder="Enter Email" onChange={loginchange}/><br/>
                <input id="login-password" type="password" name="password" placeholder="Enter password"  onChange={loginchange} />
                <button id="login-button" onClick={loginhandler}>Login</button>
                <div id="login-span">
                    <span>
                        Didn't have an account ?
                    </span>
                    <button id="login-signup" onClick={signup}>Signup</button>
                </div>
            </form>
        </div>
    )
}