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
     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const login=()=>{
        if(data.length===0){
            alert('all fields are mandatory')
        }
        else if(!emailRegex.test(data.email)){
           alert('invalid email')
        }
        else if(!data.phone.length===10){
           alert('phone number should be 10 digits')
        }
        else if(data.password !==data.confirmpassword){
            alert('password and confirm password should be same')
        }else{
            navigate('/login')
        }
      
    }
    return(
        <div id="signup-main">
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