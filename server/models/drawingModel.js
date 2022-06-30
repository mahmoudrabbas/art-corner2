import mongoose from "mongoose";

const drawingSchema = new mongoose.Schema({
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
    }
})


export default mongoose.model("Drawing",drawingSchema)