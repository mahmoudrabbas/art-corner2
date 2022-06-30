import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    reporterId:{
        type:String,
        required:true,
    },
    artistId:{
        type:String,
        required:true
    },
    drawingId:{
        type:String,
        required:true
    },
    reason: {
        type:String
    }
})


export default mongoose.model("Report",reportSchema)