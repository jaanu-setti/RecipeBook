import React , {useState} from "react";
export default function Addrecipe(){
    const [data , setData]=useState({
        name : '',
        type : '',
        ingrediants : '',
        procedure : ''
    })
    const handlechange = (e) =>{
    setData({
        ...data,
        [e.target.name] : e.target.value
    }
    )
    }
    const submitform =async (e)=>{
        e.preventDefault();
       
        const formdata = new FormData();
        formdata.append('name' , data.name);
        formdata.append('type' , data.type);
        formdata.append('ingrediants' , data.ingrediants);
        formdata.append('procedure' , data.procedure);
        if(image){
            formdata.append('file' , image)
        }
        for (let pair of formdata.entries()) {
            console.log(pair[0], pair[1]);
        }
       try{
        const response = await fetch('http://localhost:5000/recipe/addnewrecipe' ,{
            method : 'POST',
            body : formdata
        })
        if(response.ok){
            const responseData = await response.json();
            console.log("recipe added successfully" , responseData)
        }
        else{
            console.log("recipe is not added")
        }
       }catch(err){
       console.log("error : " ,err)
       }


    }
    const [image , setImage]=useState(null);
   
    const imagehandler = (e) =>{
        const file =e.target.files[0]
        setImage(file) ;
     
    }
    return(
        <div>
            <form method="POST" id="newrecipe-form" onSubmit={submitform}>
                <label>Recipe Name :-</label>
               <input name="name" placeholder="Enter Recipe Name" type="text" onChange={handlechange}/>
               <br/>
               <label>Select Recipe Type :-</label>
               <select name="type" onChange={handlechange}>
               <option name='' ></option>
                <option name="veg">veg</option>
                <option name="nonveg">nonveg</option>
               </select>
               <br/>
               <label>Upload image :-</label>
               <input type="file" name="file" onChange={imagehandler}/>
               <br/>
               <label>Ingrediants :-</label>
               <textarea name="ingrediants" type="text" onChange={handlechange}></textarea>
               <br/>
               <label>Procedure :-</label>
               <textarea name="procedure" type="text" onChange={handlechange}></textarea>
               <br/>
               <button type="submit">add recipe</button>
            </form>
        </div>
    )
}