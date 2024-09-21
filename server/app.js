const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Recipebook')

const express = require('express')
const app = express();

const cors = require('cors')
app.use(cors());

const user = require('./routes/user');
app.use('/',user)
app.listen('5000' , console.log("app is listening at port 5000"))