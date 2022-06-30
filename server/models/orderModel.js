import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    client:{
        type:String,
        required:true
    },
    clientId:{
        type:String,
        required:true
    },
    artist:{
        type:String,
        required:true,
    },
    artistId:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    message:{
        type: String
    },
    date:{
        type:Date
    },
    tel:{
        type:String,
        required:true
    },
    processing: {
        type:String,
        default: "pending"
    }
})


export default mongoose.model("Order",orderSchema)