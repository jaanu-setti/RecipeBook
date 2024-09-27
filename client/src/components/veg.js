import React , {useEffect, useState} from "react";
import Navbar from "./Navbar";
import '../assets/css/veg.css'

import {useNavigate} from 'react-router-dom'
export default function Veg(){
   const navigate = useNavigate();
   const [recipes , setRecipes]=useState([]);
   useEffect(()=>{
   fetch('http://localhost:5000/recipe/showrecipes')
   .then(res=>res.json())
   .then(data=>{
    setRecipes(data.data)})
   .catch(err=>console.log(err))
   },[])
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
             {
              recipes.filter(recipe=>recipe.type==="veg").map((recipe , index)=>
               {
                const imageUrl = `http://localhost:5000${recipe.image}`
                return(
                  <div className="recipe-card" key={recipe._id}>
                  <h4 >{recipe.name}</h4>
                  <img src={imageUrl} alt={recipe.name} height={200} width={200} onClick={()=>recipeselection(recipe.name)}/>
                </div>
                )
               }
               )
             }
          </div>
        </div>
    )
}