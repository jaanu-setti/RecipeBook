import React from "react"; 
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import '../assets/css/viewrecipe.css'
export default function Viewrecipe(){
    const location = useLocation();
    const {vegrecipe , nonvegrecipe} =location.state || {}
    if(vegrecipe){
        return(
          
              <div>
                <div>
                 <Navbar/>
                </div>
                <div className="viewrecipe-div3" key={vegrecipe._id}>
                    <h1 className="viewrecipe-h1">{vegrecipe.name}</h1>
                    <img  className="viewrecipe-img" src={`http://localhost:5000${vegrecipe.image}`} alt={vegrecipe.image} height={300} width={400}/>
                    <h3 className="viewrecipe-ingrediants">Ingrediants for {vegrecipe.name}:-</h3>
                    <div className="ingrediants">{vegrecipe.ingrediants.map((ingrediant , index)=>(
                        <span key={index} >{ingrediant}
                        {index < vegrecipe.ingrediants.length-1 ? ' ,   ' : ''}
                        </span>
                       
                    ))}</div>
                    <h3 className="viewrecipe-procedure">Procedure for {vegrecipe.name}:-</h3>
                    <div className="procedure">
                        {vegrecipe.procedure.map((points)=>(
                            <span>{points}</span>
                        ))}
                    </div>
                </div>
              </div>
        )}   
        if(nonvegrecipe){
           return(
            <div>
                <div><Navbar/></div>
                <div className="viewrecipe-div3" key={nonvegrecipe._id}>
                    <h1 className="viewrecipe-h1">{nonvegrecipe.name}</h1>
                    <img  className="viewrecipe-img" src={`http://localhost:5000${nonvegrecipe.image}`} alt={nonvegrecipe.name} height={300} width={400}/>
                    <h3  className="viewrecipe-ingrediants">ingrediants for {nonvegrecipe.name}:-</h3>
                    <div  className="ingrediants">
                        {nonvegrecipe.ingrediants.map((ingrediant , index)=>(

                       
                        <span key={index}>{ingrediant}
                        {index < nonvegrecipe.ingrediants.length ? ' ,  ' : ''}
                        </span>
                    
                ) )}
                    </div>
                    <h3 className="viewrecipe-procedure">procedure for {nonvegrecipe.name}</h3>
                    <div  className="procedure">
                        {nonvegrecipe.procedure.map((points)=>(
                          <span>{points}</span>
                        )

                        )}
                    </div>
                </div>
            </div>
           )
        }
    
    return(
        <div>
           no recipe selected
        </div>
    )
}