import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    artist:{
        type:String,
        required:true,
    },
    artistId:{
        type:String,
        required:true
    },
    date:{
        type:Date,
    },
    category: {
        type:String
    },
    drawing:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    likes:{
        type:[String],
    },
    isSold:{
        type:Boolean,
        default:false
    },
    clientId: {
        type:String
    }
})


export default mongoose.model("Product",productSchema)