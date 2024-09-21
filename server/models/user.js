const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        name : {type : String , require : true },
        email : {type : String , require : true , unique : true},
        phone : {type : Number , require : true },
        password : {type : String , require : true , minlength : 8 },
        confirmpassword : {type : String , require : true}
    }
)
const user = mongoose.model('User' , userSchema);
module.exports = user;