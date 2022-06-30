import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCourseAction } from './../../redux/actions/courseActions';
import { useNavigate, useParams } from 'react-router-dom';
const CourseEditing = () => {

    const id =useParams().id;



    const course = useSelector(state => state.courses.filter(course => course._id === id)[0])


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [courseData, setCourseData] = useState({...course})

    const handleSubmit = async (e) => {
        e.preventDefault();
            dispatch(updateCourseAction(id, {...courseData}))
            navigate(`/courses`)
    }
    return (
        <React.Fragment>
            <form className="setting-style" onSubmit={handleSubmit}>
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Course Editing</h4>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12 mt-2"><label className="labels">Course Title</label><input type="text" className="form-control" value={courseData.courseTitle} onChange={(e)=> setCourseData({...courseData,courseTitle:e.currentTarget.value})} /></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12 mt-1"><label className="labels">Course Description</label><input type="text" className="form-control" value={courseData.courseDesc} onChange={(e)=> setCourseData({...courseData,courseDesc:e.currentTarget.value})} /></div>
                                    <div className="col-md-12 mt-3"><label className="labels">Course Price (LE)</label><input type="text" className="form-control" value={courseData.coursePrice} onChange={(e)=> setCourseData({...courseData,coursePrice:e.currentTarget.value})}/></div>
                                    <div className="col-md-12 mt-3"><label className="labels">Course Links</label><input type="text" className="form-control" value={courseData.links} onChange={(e)=> setCourseData({...courseData,links:e.currentTarget.value})}/></div>
                                </div>
                                <button className="btn btn-primary profile-button mt-4" type="submit">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}

export default CourseEditing