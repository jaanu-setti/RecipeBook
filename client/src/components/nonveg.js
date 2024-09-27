import React , {useState , useEffect} from "react";
import Navbar from "./Navbar";
import '../assets/css/veg.css'
import { useNavigate } from "react-router-dom";

export default function Nonveg(){
    const [recipes , setRecipes] = useState([]);
   
    const navigate = useNavigate();
     useEffect(()=>{
     fetch('http://localhost:5000/recipe/showrecipes')
     .then(res=>res.json())
     .then(data=>{
       
        setRecipes(data.data)
       
     })
     .catch(err=>console.log(err))
     },[])
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
               {
                recipes.length >0?(
               recipes.filter(recipe=>recipe.type==="nonveg").map((recipe,index)=>{
                const imageUrl = `http://localhost:5000${recipe.image}`; 
               return(
                <div className="recipe-card" >
                   <h4 key={recipe._id}>{recipe.name}</h4>
                   <img src={imageUrl} alt={recipe.name} height={200} width={200} onClick={()=>recipeselection(recipe.name)}/>
                </div>
               )
               }
                
               )
            ) : (
                <div> no recipes found</div>
            )
               }
              </div>
        </div>
    )
}