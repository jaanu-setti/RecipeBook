import React from "react";
import logo from '../assets/images/recipebook.png'
import '../assets/css/navbar.css'
const Navbar = ()=>{
    return(
        <div id="navbar-main-div">
            <div id="navbar-logo">
               <img src={logo} alt="logo" height={80} width={100}/> 
            </div>
            <div id="navbar-span">
                <h3>The Family of Recipes</h3>
            </div>
            <div id="navbar-home">
                <span>Home</span>
            </div>
            <div id="navbar-about">
                <span>About</span>
            </div>
            
        </div>
    )
}
export default Navbar;