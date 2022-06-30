import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    number:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    account_type:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    profile_picture:{
        type:String,
        default:""
    },
    bio: {
        type:String
    }
})


export default mongoose.model("User",userSchema)