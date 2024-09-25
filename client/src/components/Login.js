import React,{useState} from "react";
import '../assets/css/login.css'
import {useNavigate} from 'react-router-dom'
export default function Login(){
    const [logindata , setLogindata]=useState({
        email: '',
        password: ''
    });
    const loginchange=(e)=>{
    setLogindata({
        ...logindata,
        [e.target.name]:e.target.value
    })
    }
    const navigate = useNavigate();
    const signup = ()=>{
        navigate('/signup')
    }
    const loginhandler = async (e)=>{
        e.preventDefault();
     try{
        const response= await fetch('http://localhost:5000/recipe/login',{
            method : 'POST',
            headers : {
                "Content-Type" : 'application/json'
            },
            body :JSON.stringify({
                email : logindata.email,
                password : logindata.password
            }) 
           })
           const data = await response.json()
           console.log(data)
           if(response.ok){
            console.log('login successfull' , data);
            navigate('/home')
           }
           else{
            console.log('login failed' , data.message)
            alert('user authentication failed')
           }
         
     }catch(err){
     console.log("error" ,err)
     }
    }
    return(
        <div id="login-main">
            <form  id="login-form" onSubmit={loginhandler}>
                <h2 id="login-h2">Login Form</h2>
                <input id="login-email" type="email" name="email" placeholder="Enter Email" onChange={loginchange}/><br/>
                <input id="login-password" type="password" name="password" placeholder="Enter password"  onChange={loginchange} />
                <button id="login-button" type="submit">Login</button>
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