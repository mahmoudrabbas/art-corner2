import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCourseAction, enrollOnCourseAction } from './../../redux/actions/courseActions';

const Course = ({course}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <>
            
            
            <div className="card m-1" style={{width: "21rem"}}>
                <img src={course?.courseThumbnail} style={{width: "21rem",height:"20rem", objectFit:"cover"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h5 style={{textTransform:"capitalize"}} className="card-title">{course?.courseTitle}</h5>
                        {(user?._id===course?.artistId)?(<button type="button" className="btn" onClick={() => navigate(`edit/${course?._id}`)}><i className="fa-solid fa-ellipsis"></i></button>):""}
                    </div>
                    <p className="card-text">{course?.courseDesc}</p>
                    <p style={{textTransform:"capitalize"}} className="card-text">Artist \ <Link to={`/user/${course?.artistId}`}>{course?.artist}</Link></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Videos \ {course?.videosNumber} Lessons</li>
                    <li className="list-group-item">Price \ {course?.coursePrice} L.E</li>
                    {(user?._id === course?.artistId)?(
                        <li className="list-group-item btn btn-danger" onClick={() => dispatch(deleteCourseAction(course?._id))}>Delete</li>
                    ):(
                        course?.enroll?.find((id) => id === user?._id)? (
                            <li className="list-group-item btn btn-dark" onClick={() => navigate(`/courses/course/${course?._id}`)}>Watch Course</li>
                        ):(
                            <li className="list-group-item btn btn-primary" onClick={() => dispatch(enrollOnCourseAction(course?._id))}>Enroll</li>
                        )
                    )}
                </ul>


                </div>
        </>
    )
}

export default Course