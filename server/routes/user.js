const express = require('express');
const route =  express.Router();
const User = require('../models/user')
const validate = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
route.get('/',async(req,res)=>{
    const data = await User.find();
    res.send(data)
})
route.post('/login' , async(req,res)=>{
 try{
   const {email , password} = req.body;
   const user = await User.findOne({email : email.toLowerCase()})
   if(!user){
    res.status(400).json({message : "no user is registered with the given email"})
   }
   const passwordmatch = await bcrypt.compare(password, user.password);
   if(!passwordmatch){
    res.status(400).json({message : "incorrect password"})
   }
   const token = jwt.sign({name : user.name , email:user.email} , 'secret_key' , {expiresIn : "1hr"})
   return res.json({token});
 }catch(err){

 }
})
route.post('/signup',async(req,res)=>{
    try{
        const {name , email, phone, password , confirmpassword}=req.body;
        // check if user already exists or not
        const data =await User.findOne({email})
        if(data){
            return res.send("email is already existed")
        }
        // email validation
        if(!validate.isEmail(email)){
            return res.status(400).json({message : "please enter valid email"})
        }
        if(password!==confirmpassword){
            return res.status(400).json({message : "password and cnfirmpassword should be same"})
        }
        const hashedpassword =await bcrypt.hash(password , 10);
        //creating a new user 
        const userdata = User.create({
          name ,
          email,
          phone,
          password : hashedpassword,
          confirmpassword: hashedpassword
        })
        res.status(200).json({message : "Registration Successfull"})
    }
    catch(err){
      res.status(500).json({message : err.message})
    }
})
module.exports=route;