import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteEventAction } from '../../redux/actions/eventActions';

const DeleteEvent = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteEventAction(input))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='input'>Enter the event id</label><br></br>
                <input type='text' onChange={(e)=> setInput(e.target.value)} />
                <button type='submit' className='btn btn-danger m-1'>Delete</button>
            </form>

        </div>
    )
}

export default DeleteEvent