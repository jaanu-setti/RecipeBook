import React from "react"; 
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import '../assets/css/viewrecipe.css'
export default function Viewrecipe(){
    const location = useLocation();
    const {vegrecipe} =location.state || {}
    if(vegrecipe){
        return(
          
              <div>
                <div>
                 <Navbar/>
                </div>
                <div id="viewrecipe-div3">
                    <h1 id="viewrecipe-h1">{vegrecipe.name}</h1>
                    <img id="viewrecipe-img" src={vegrecipe.image} alt={vegrecipe.image} height={300} width={400}/>
                    <h3 id="viewrecipe-ingrediants">Ingrediants for {vegrecipe.name}:-</h3>
                    <div id="ingrediants">{vegrecipe.ingrediants.map((ingrediant , index)=>(
                        <span key={index} >{ingrediant}
                        {index < vegrecipe.ingrediants.length-1 ? ' ,   ' : ''}
                        </span>
                       
                    ))}</div>
                    <h3 id="viewrecipe-procedure">Procedure for {vegrecipe.name}:-</h3>
                    <div id="procedure">
                        {vegrecipe.procedure.map((points)=>(
                            <span>{points}</span>
                        ))}
                    </div>
                </div>
              </div>
        )}   
        
    
    return(
        <div>
           no recipe selected
        </div>
    )
}