const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        name : {
            type : String,
            trim : true,
            required : true
        },
        email : {
            type : String,
            trim : true,
            
            required : true
        },
        password : {
            type : String,
            trim : true,
            
            required : true
        },
        skill : {
            type : String,
            trim : true,
            required : true
        },
        role : {
            type : String,
            trim : true,
            default : "user"
        }
    },
    {
        timestamps : true
    }
)

module.exports = model("User", userSchema)