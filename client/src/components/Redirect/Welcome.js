import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className='container text-white p-5'>
            <div>
                <h2>Welcome to Art Corner you're signed now..</h2>
                <p>Do you want to go to login on the website click <Link to='/login'>Here</Link></p>
            </div>
        </div>
    )
}

export default Welcome