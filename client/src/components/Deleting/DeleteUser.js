import React, { useState } from 'react'
import * as api from '../../api/index.js'
const DeleteUser = () => {

    const [input, setInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        api.deteteUser(input);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='input'>Enter the user id</label> <br />
                <input type='text' onChange={(e)=> setInput(e.target.value)} />
                <button type='submit' className='btn btn-danger m-1'>Delete</button>
            </form>

        </div>
    )
}

export default DeleteUser