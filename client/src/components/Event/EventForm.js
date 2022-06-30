// import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createEventAction } from '../../redux/actions/eventActions.js';
import { useNavigate } from 'react-router-dom';

const EventForm = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch();
    const navigate =  useNavigate();

    

    const [eventData, setEventData] = useState({
        eventName: "",
        eventDescription: "",
        date:"",
        time: "",
        location: "",
        price:0,
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createEventAction({ ...eventData, artist:user?.fullName, artistId:user?._id}))
        navigate(`/user/${user._id}`)
    }



    return (
        <div>
                <main className="form-signin">
                    <form onSubmit={handleSubmit}>
                        <h4>Add Event</h4>
                        <div className="form-floating">
                            <input
                                required
                                type="text" 
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setEventData({...eventData,eventName:e.target.value})} />
                            <label htmlFor="floatingInput">Event Name</label>
                        </div>


                        <div className="form-floating">
                            <input
                                required
                                type="text" 
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setEventData({...eventData,eventDescription:e.target.value})} />
                            <label htmlFor="floatingInput">Description</label>
                        </div>
            

                        <div className="form-floating">
                            <input
                                required
                                type="date" 
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setEventData({...eventData,date: e.target.value})} />
                            <label htmlFor="floatingInput">Event Date</label>
                        </div>


                        <div className="form-floating">
                            <input
                                required
                                type="time" 
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setEventData({...eventData,time:e.target.value})} />
                            <label htmlFor="floatingInput">Event Time</label>
                        </div>

                        <div className="form-floating">
                            <input
                                required
                                type="text" 
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setEventData({...eventData,location:e.target.value})} />
                            <label htmlFor="floatingInput">Location</label>
                        </div>


                        <div className="form-floating">
                            <input
                                required
                                type="number"
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setEventData({...eventData,price:e.target.value})} />
                            <label htmlFor="floatingInput">Price in LE</label>
                        </div>


                        <button className="w-100 mt-2 btn btn-lg btn-primary" type="submit">Create</button>

                    </form>
                </main>
        </div>
    )
}

export default EventForm