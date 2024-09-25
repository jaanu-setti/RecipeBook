const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Recipebook')

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
app.listen('5000' , console.log("app is listening at port 5000"))