import Course from '../models/courseModel.js'


export const getAllCourses = async (req,res) => {
    try {
        const courses = await Course.find();
        if(!courses) return res.send("There is no Courses")
        res.json(courses)

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}

export const getAllCoursesById = async (req,res) => {
    const {id} = req.params;
    try {
        const courses = await Course.find({ artistId: id });
        if(!courses) return res.send("There is no Courses")
        res.json(courses)
    } catch (error) {
        res.send({message:"Server Error"})
    }    
}

export const enroll = async (req,res) => {
    const {id} = req.params;
    try {
        const course = await Course.findById(id);
        if(!course) return res.json({ message: "sorry this course is not found" });
        const newCourse = { ...course, enroll:course.enroll.push(req.userId)};
        const updatedCourse = await Course.findByIdAndUpdate(id, {...req.body, ...newCourse }, {new:true} )
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: "failed to update" })
    }

}


export const getCourse = async (req,res) => {
    const {id} = req.params

    try {
        const course = await Course.findById(id);
        if(!course) return res.send("Course is not found")
        res.json(course)

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}


export const uploadCourse = async (req,res) => {
    const {courseTitle,artist,artistId,courseThumbnail,courseDesc,videosNumber,links,coursePrice} = req.body

    const newlinks = links.split(",");

    const newCourse = await new Course({
        courseTitle,
        courseThumbnail,
        artist,
        artistId,
        courseDesc,
        videosNumber,
        coursePrice,
        links:newlinks
    })


    try {
        const course = await newCourse.save();
        res.json(course)

    } catch (error) {
        res.send({message:"Server Error"})
    }    
}


export const editCourse = async (req,res) => {
    const {id} = req.params;
    const course = req.body;
    try {
        const updatedCourse = {...course, _id:id}
        const newCourse = await Course.findByIdAndUpdate(id, updatedCourse, {new:true});
        res.send(newCourse)
    } catch (error) {
        res.send({message:"Server Error"})
    }
}

export const deleteCourse = async (req,res) => {
    const {id} = req.params;
    try {
        const course = await Course.findByIdAndDelete(id);
        res.send(course)
    } catch (error) {
        res.send({message:"Server Error"})
    }
}


