const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    name : {type : String , required : true},
    type : {type : String , required : true},
    image : {type : File , required : true},
    ingrediants : {type : String , required : true},
    procedure : {type : String , required : true}
})
const recipe = mongoose.Model('Recipe' , recipeSchema);
module.exports = recipe;