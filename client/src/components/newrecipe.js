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
    const submitform = (e)=>{
        e.preventDefault();
        console.log(data,image)
    }
    const [image , setImage]=useState(null);
    const [imagepreview , setImagepreview] = useState('');
    const imagehandler = (e) =>{
        const file =e.target.files[0]
        setImage(file) ;
        setImagepreview(URL.createObjectURL(file))
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
                <option name="veg">Veg Recipe</option>
                <option name="nonveg">Nonveg Recipe</option>
               </select>
               <br/>
               <label>Upload image :-</label>
               <input type="file" name="file" onChange={imagehandler}/>
               <br/>
               {imagepreview && (
          <div>
            <img src={imagepreview} alt="Selected Recipe" width="200px" />
          </div>
        )}
               <label>Ingrediants :-</label>
               <textarea name="ingredients" type="text" onChange={handlechange}></textarea>
               <br/>
               <label>Procedure :-</label>
               <textarea name="procedure" type="text" onChange={handlechange}></textarea>
               <br/>
               <button type="submit">add recipe</button>
            </form>
        </div>
    )
}