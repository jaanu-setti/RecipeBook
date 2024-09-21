const express = require('express');
const route =  express.Router();
const User = require('../models/user')
const validate = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
route.get('/',(req,res)=>{
    res.send("hello everyone")
})
route.post('signup',async(req,res)=>{
    try{
        const {name , email, phone, password , confirmpassword}=req.body();
        // check if user already exists or not
        const data =await User.findOne({email})
        if(data){
            return res.send("email is already existed")
        }
        // email validation
        if(!validate.isEmail(email)){
            return res.status(400).json({message : "please enter valid email"})
        }
        const hashedpassword = bcrypt.hash(password , 10);
        //creating a new user 
        const userdata = User.create({
          name ,
          email,
          phone,
          password : hashedpassword,
          confirmpassword : hashedpassword
        })
        res.status(200).json({message : "Registration Successfull"})
    }
    catch(err){
      res.status(500).json({message : err.message})
    }
})
module.exports=route;