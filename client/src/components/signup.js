import React ,{useState}from "react";
import '../assets/css/signup.css'
import { useNavigate } from "react-router-dom";
const Signup = ()=>{
    const [data , setData]=useState('');
    const datachange=(e)=>{
     setData({
        ...data,
        [e.target.name]:e.target.value
    })
    }
    const navigate = useNavigate();
    const login=()=>{
      navigate('/login')
    }
    return(
        <div>
            <form id="signup-form">
                <h2>Signup Form</h2>
                <input id="signup-name" type="text" name="fullname" placeholder="Enter Your FullName" onChange={datachange} required/><br/>
                <input  id="signup-email" type="email" name="email" placeholder="enter your email" onChange={datachange} required/> <br/>
                <input  id="signup-number" type="number" name="phone" placeholder="enter your mobile number" onChange={datachange} required/><br/>
                <input  id="signup-password" type="password" name="password" placeholder="enter a strong password" onChange={datachange} required/><br/>
                <input  id="signup-confirmpassword" type="password" name="confirmpassword" placeholder="re-enter your password" onChange={datachange} required/><br/>
                <button  id="signup-button" onClick={login}>Signup</button>
                <div id="signup-span">
                    <span>Already have an account ?</span>
                    <button id="signup-login" onClick={login}>Login</button>
                </div>
            </form>
        </div>
    )
}
export default Signup;