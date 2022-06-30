import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseTitle:{
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
    courseDesc:{
        type:String,
        required:true,
    },
    courseThumbnail:{
        type:String,
        required:true
    },
    coursePrice:{
        type:Number,
        default:0
    },
    enroll:{
        type:[String]
    },
    links:{
        type:[String],
        required:true
    },
})


export default mongoose.model("Course",courseSchema)