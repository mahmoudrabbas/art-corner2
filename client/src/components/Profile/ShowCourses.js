import React  from 'react'
import { useParams } from 'react-router-dom';
import Course from '../Courses/Course';
import { useSelector } from 'react-redux';

const ShowCourses = () => {

    const {id} = useParams();

    const courses = useSelector(state => state.courses.filter(course => course.artistId === id));

    return (
        <>
        <div className="row py-3 px-6"> 
            <div className="col-md-11 mx-auto">

                <div className="bg-white shadow rounded overflow-hidden">
                    <div  className="px-4 pt-5 pb-5 cover"> 
                        <div className="media align-items-end profile-head">
                            <div className="media-body mb-5 text-white">
                                
                            </div>
                        </div>
                    </div> 

                    <div className="p-4 d-flex justify-content-end"> 
                            <ul className="list-inline mb-0"> 
                                <li className="list-inline-item"> 
                                    <h5 className="font-weight-bold mb-0 d-block">{courses?.length} <i className="fas fa-image mr-1"></i></h5>
                                    <small className="text-dark">courses</small>
                                </li>
                            </ul>
                        </div>

                    <div className="py-4 px-4"> 
                            <div className="row">
                                {courses?.length? (
                                    courses?.map(course => (
                                        <Course course={course} key={course._id} />
                                    ))
                                ): (
                                    <h5>This artist has no courses yet</h5>
                                )}
                                

                            </div>
                        </div>
                </div> 
            </div>
        </div>
    </>
    )
}

export default ShowCourses