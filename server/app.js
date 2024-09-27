const mongoose = require('mongoose');
const Insertdefaultrecipes = require('./utilss/seedrecipe')
mongoose.connect('mongodb://localhost:27017/Recipebook')
  .then(() => {
    console.log("Connected to MongoDB");

    // Call the insertDefaultRecipes function after successful DB connection
    Insertdefaultrecipes(); 
  })
.catch(err => console.error("Failed to connect to MongoDB:", err));


const express = require('express')
const app = express();
app.use(express.json())
const cors = require('cors');
app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],       
        credentials: true                
      }
));

const user = require('./routes/user');
app.use('/recipe',user)

const recipe = require('./routes/recipe')
app.use('/recipe' , recipe)

const path = require('path');
// app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('public'))
app.listen('5000' , console.log("app is listening at port 5000"))