import React from "react";
import Navbar from "./Navbar";
import '../assets/css/veg.css'
import vegstarters from '../assets/images/veg-starter.jpg'
import vegbiryani from '../assets/images/vegbiryani.jpg'
import vegcurry from '../assets/images/sambar.jpeg'
import {useNavigate} from 'react-router-dom'
export default function Veg(){
   const navigate = useNavigate()
   const startersdetails = ()=>{
  navigate('/vegstarters')
   }
    return(
        <div>
          <div id="veg-div1">
            <Navbar/>
          </div>
          <div id="veg-div2">
             <div id="veg-starters-div">
                <h4>veg Starters</h4>
                <img src={vegstarters} alt="veg-starters" height={200} width={200} onClick={startersdetails}/>
             </div>
             <div id="veg-biryani-div">
                <h4>veg Biryanis</h4>
                <img src={vegbiryani} alt="veg-biryani" height={200} width={200}/>
             </div>
             <div id="veg-curry-div">
                <h4>veg currys</h4>
                <img src={vegcurry} alt="veg-curry" height={200} width={200}/>
             </div>
          </div>
        </div>
    )
}