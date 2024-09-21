import React from "react";
import '../assets/css/home.css'
import Navbar from "./Navbar";
import vegthali from '../assets/images/vegthali.jpg';
import nonvegthali from '../assets/images/nonveg-thali.jpg'
import { useNavigate } from "react-router-dom";
export default function Home(){
    const navigate = useNavigate();
    const vegsection = ()=>{
      navigate('/veg')
    }
    return(
        <div>
            <div id="home-div1">
                <Navbar/>
            </div>
            <div id="home-div2">
                <div id="veg-div">
                    <h3>VEG section</h3>
                    <img id="home-veg" src={vegthali} alt="veg" height={300} width={300} onClick={vegsection}/>
                </div>
                <div id="nonveg-div">
                    <h3>NONVEG section</h3>
                    <img id="home-nonveg" src={nonvegthali} alt="nonveg" height={300} width={300}/>
                </div>
            </div>
        </div>
    )
}