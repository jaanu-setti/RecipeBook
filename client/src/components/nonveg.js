import React , {useState} from "react";
import { nonvegrecipes } from "./recipe";
import Navbar from "./Navbar";
import '../assets/css/veg.css'
import { useNavigate } from "react-router-dom";

export default function Nonveg(){
    const [recipes , setRecipes] = useState(nonvegrecipes);
   
    const navigate = useNavigate();

    const recipeselection = (name)=>{
        const recipe = recipes.find((r)=>r.name===name)
        console.log(recipe)
        if(recipe){
            navigate('/viewrecipe' ,{ state :{nonvegrecipe : recipe}})
        }
        
    }
    return(
        <div>
              <div><Navbar/></div>
              <div className="veg-div2">
                {recipes.map((recipe , index)=>(
                     <div className={ `veg-${index}`} >
                        <h4 key={recipe.name}>{recipe.name}</h4>
                        <img src={recipe.image} alt={recipe.image} height={200} width={200} onClick={()=>recipeselection(recipe.name)}/>
                     </div>
                ))}
              </div>
        </div>
    )
}