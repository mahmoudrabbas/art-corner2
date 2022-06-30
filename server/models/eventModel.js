import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventDescription:{
        type:String,
        required:true,
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
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    isAccepted:{
        type:String,
        default:"pending",
    },
    createdAt:{
        type:Date
    },
    people: {
        type: [String]
    }
})


export default mongoose.model("Event",eventSchema)