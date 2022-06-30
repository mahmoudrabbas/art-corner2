import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteCourseAction } from './../../redux/actions/courseActions';

const DeleteCourse = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteCourseAction(input))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='input'>Enter the course id</label> <br />
                <input type='text' onChange={(e)=> setInput(e.target.value)} />
                <button type='submit' className='btn btn-danger m-1'>Delete</button>
            </form>

        </div>
    )
}

export default DeleteCourse