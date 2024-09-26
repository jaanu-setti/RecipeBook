const express = require("express");
const route = express.Router();
const multer = require('multer');
const Recipe = require('../models/recipe')
const path = require('path')
route.get('/showrecipes',async(req,res)=>{
    try{
        const showrecipes = await Recipe.find();
        console.log(showrecipes)
    res.status(201).json({message : "recipes fetched successfully", data :showrecipes})
    }catch(err){
        res.status(500).json({message : err.message})
    }
})
route.post('/recipearray' ,async(req,res)=>{
    console.log("Incoming request body:", req.body); 
   try{
    const recipearray = req.body;
    if (!Array.isArray(recipearray)) {
        return res.status(400).json({ message: "Input should be an array of recipes" });
      }
    console.log('Received recipe array:', recipearray);
    const addedrecipe = await Recipe.insertMany(recipearray);
    res.status(200).json({message : "recipes added successfully" , data : addedrecipe})
   }catch(err){
     res.status(500).json({message : err.message})
   }
   
})
const storage = multer.diskStorage({
    destination : function(req , file , cb){
        return cb(null ,'public/images')
      },
    filename : function(req, file , cd){
        return cd(null , file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const uploadimage = multer({storage})
route.post('/addnewrecipe' , uploadimage.single("file"), async(req,res)=>{
   try{
    console.log(req.file);
    
    if (!req.file) {
        return res.status(400).json({ message: "Image is required" });
    }
    const {name , type , ingrediants , procedure}= req.body;
    // console.log("reqbody" ,req.body)
    const image = req.file.filename;
    console.log(image)
    if(!name || !type || !image || !ingrediants || !procedure){
        res.status(400).json({message : "all fields are required"})
    }
     const newrecipe = new Recipe({
        name : name ,
        type : type,
        ingrediants : ingrediants,
        procedure : procedure,
        image :  `/images/${req.file.filename}`
     })
     const recipedata = await newrecipe.save();
     res.status(201).json({message : "recipe stored successfully" , data: recipedata} )
   }catch(err){
    res.status(500).json({message : err.message})
   }

})
module.exports=route;