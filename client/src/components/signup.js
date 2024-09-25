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
    const login = ()=>{
        navigate('/login')
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const signup = async (e) =>{
        e.preventDefault();
        if (!data.fullname || !data.email || !data.phone || !data.password || !data.confirmpassword) {
            alert('All fields are mandatory');
            return;
        }
        if (!emailRegex.test(data.email)) {
            alert('Invalid email');
            return;
        }
        if (data.phone.length !== 10) {
            alert('Phone number should be 10 digits');
            return;
        }
        if (data.password !== data.confirmpassword) {
            alert('Password and confirm password should be the same');
            return;
        }

    try{
   const response = await fetch('http://localhost:5000/recipe/signup',
        {
         method : 'POST',
        headers : {
         "Content-Type" : "application/json",
        },
        body : JSON.stringify({
         name:data.name,
         email : data.email,
         phone : data.phone,
         password : data.password,
         confirmpassword : data.confirmpassword
        }) }
     )
     if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log(result); 
    navigate('/login')
 }
catch(err){
        console.log(err)
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
                <button  id="signup-button" onClick={signup}>Signup</button>
                <div id="signup-span">
                    <span>Already have an account ?</span>
                    <button id="signup-login" onClick={login}>Login</button>
                </div>
            </form>
        </div>
    )
}
export default Signup;