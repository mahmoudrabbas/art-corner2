import express from "express";
const router = express.Router();

import auth from "../middlewares/auth.js";

import { getAllCourses, getCourse, uploadCourse, deleteCourse, editCourse, enroll,getAllCoursesById } from "../controllers/courseController.js";



router.get('/',getAllCourses);
// router.get('/my-courses:id',getAllCoursesById);
router.get('/:id',getCourse);
router.post('/',uploadCourse);
router.patch('/:id',editCourse);
router.patch('/enroll/:id', auth, enroll);
router.delete('/:id',deleteCourse);



export default router;

