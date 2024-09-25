const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        name : {type : String , required : true },
        email : {type : String , required : true , unique : true , index : true},
        phone : {type : Number , required : true },
        password : {type : String , required : true , minlength : 8 },
        confirmpassword : {type : String , required : true}
    }
)
const user = mongoose.model('User' , userSchema);
module.exports = user;