import React, { useState } from 'react'
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCourseAction } from '../../redux/actions/courseActions';

const CourseForm = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    const dispatch = useDispatch();
    const navigate =  useNavigate();

    const [courseData, setcourseData] = useState({
        courseTitle:"",
        artist:"",
        artistId:"",
        courseDesc:"",
        courseThumbnail:"",
        coursePrice:"",
        links:""
    });

    const [msg, setMsg] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(courseData.courseThumbnail === ""){
            setMsg("Please enter the thumbnail for the course");
        }else{
            dispatch(createCourseAction({ ...courseData, artist:user.fullName, artistId:user._id}))
            navigate(`/user/${user._id}`)
        }
    }
    return (
        <>
            <div className="text-center1">
                <main className="form-signin">
                    <form onSubmit={handleSubmit}>
                        <h4>Add New Course</h4><br />
                        <div className="form-floating">
                            <input
                                required
                                type="text" 
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setcourseData({...courseData,courseTitle:e.target.value})} />
                            <label htmlFor="floatingInput">Course Title</label>
                        </div>

                        <div className="form-floating">
                            <input
                                required
                                type="text" 
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setcourseData({...courseData,courseDesc:e.target.value})} />
                            <label htmlFor="floatingInput">Course Description</label>
                        </div>

                        <div className="form-floating">
                            <input
                                required
                                type="text"
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setcourseData({...courseData,links:e.target.value})} />
                            <label htmlFor="floatingInput">Course Link</label>
                        </div>

                        <div className="form-floating">
                            <input
                                required
                                type="number"
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setcourseData({...courseData,coursePrice:e.target.value})} />
                            <label htmlFor="floatingInput">Price in LE</label>
                        </div>


                        <div className="form-floating">
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Course Thumbnail</label>
                                <FileBase64 multiple={false} onDone={({base64}) => setcourseData({...courseData,courseThumbnail:base64}) } className="form-control" type="file" id="formFile" />
                            </div>
                        </div>

                        <button className="w-100 mt-2 btn btn-lg btn-primary" type="submit">Upload</button>
                        {msg&&<p>{msg}</p>}
                    </form>
                </main>
            </div>
        </>
    )
}

export default CourseForm