//  LOGIC , Business Logic

const app = require("../app");
const User = require("../models/userModel");

exports.home = (req,res)=>{
    res.send("Welcome to the Home page of CRUD Application")
}

exports.createUser = async (req,res)=>{

    try {
        const { name , email } = req.body;

        //  To check whether all the details have been filled or not
        if(!name || !email){
            throw new Error(`Name and Email are mandatory`);
        }
        const userExist = await User.findOne({email})
        if(userExist){
            /* 
            res.status(401).json(`Email Already Exist`)
            */
            throw new Error(`Email Already Exist`);  // This is industry standard
        }

        // Inserting into the dataBase
        const user = await User.create({name , email});
        res.status(201).json({
            success:true,
            message: "User Created Successfully",
            user,
        })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }

};

exports.getUsers = async (req,res)=>{

    try {
        const users = await User.find();
        res.status(201).json({
            success:true,
            users,
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success :false,
            message:error.message
        })
    }
}

exports.editUser = async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id , req.body)
        res.status(200).json({
            success:true,
            message:"User updated Successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message,
        })
    }
}

exports.deleteUser = async(req,res)=>{
    try {
        const userID = req.params.id;
        
        const user = await User.findByIdAndDelete(userID)
        res.status(200).json({
            success:true,
            message:"User Deleted Successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message,
        })
    }
}




/*
Instead of 

exports.home = (req,res)=>{
    res.send("<b>Hello first Batch of Hitesh Sir's live batch </b>")
}

we can also write the above code as below

    module.exports = { home , createUser}
*/
