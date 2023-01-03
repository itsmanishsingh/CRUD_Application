const mongoose = require("mongoose");
const connectToDB = require('../config/db')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true , "Name is Compulsory"],
        trim : true,               //  To trim the extra spaces between two words
        maxlength :[25 , "Name must be less than 25 characters"],
    },
    email:{
        type:String,
        require:[true ,"Email is Compulsory / Required"],
        unique:true,
    }
})

module.exports = mongoose.model("User" , userSchema);