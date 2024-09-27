const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    name : {type : String , required : true , unique : true},
    type : {type : String , required : true},
    image : {type : String , required : true},
    ingrediants :[String],
    procedure : [String]
})
const recipe = mongoose.model('Recipe' , recipeSchema);
module.exports = recipe;