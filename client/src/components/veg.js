import React , {useState} from "react";
import Navbar from "./Navbar";
import '../assets/css/veg.css'
import { vegrecipes } from "./recipe";
import {useNavigate} from 'react-router-dom'
export default function Veg(){
   const navigate = useNavigate();
   const [recipes , setRecipes]=useState(vegrecipes);
   const recipeselection = (name)=>{
   const recipe = recipes.find((r)=>r.name===name)
   console.log(recipe)
   if(recipe){
      navigate('/viewrecipe' , {state : {vegrecipe : recipe}})
   }
   }
    return(
        <div>
          <div id="veg-div1">
            <Navbar/>
          </div>
          <div className="veg-div2">
             {recipes.map((recipe , index)=>
              <div className={ `veg-${index}`}>
                <h4  key={recipe.name}>{recipe.name}</h4>
                <img src={recipe.image} alt={recipe.name} height={200} width={200} onClick={()=>recipeselection(recipe.name)}/>
              </div>
             )}
          </div>
        </div>
    )
}