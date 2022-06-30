import React from 'react'
import { useSelector } from 'react-redux';
import Event from './Event';
import EventForm from './EventForm';

const EventAdmin = () => {
    const events = useSelector(state => state.events )
    return (
        <div className='container'>
            <div className="row">
                <div className='col-8'>
                    {events.length?(
                        events.map(event => (
                            <Event key={event._id} event={event}/>
                        ))
                    ):""}
                </div>
                <div className='col-4'>
                    <EventForm />
                </div>
            </div>
        </div>
    )
}

export default EventAdmin