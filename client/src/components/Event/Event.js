import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteEventAction, joinEventAction } from '../../redux/actions/eventActions';
import { Link, useNavigate } from 'react-router-dom';

const Event = ({event}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className="card mt-1">
            <div className="card-header" style={{display:"flex", justifyContent:"space-between"}}>
                <span>{event.eventName}</span>
                {(user?._id === event?.artistId || user?.isAdmin)?(
                    <button type="button" onClick={() =>dispatch(deleteEventAction(event._id)) } className="btn-close btn-close-dark" data-bs-toggle="tooltip" data-bs-placement="right" title="delete" aria-label="Close"></button>
                ):""}
            </div>
            <div className="card-body">
                <h5 className="card-title"><Link to={`/user/${event?.artistId}`}>{event?.artist}</Link></h5>
                <p className="card-text">{event?.eventDescription}</p>
                <p className="card-text">Location: {event?.location}</p>
                <p className="card-text">On: {event?.date}</p>
                <p className="card-text">Time: {event?.time}</p>
                {(user?._id !== event?.artistId)? (
                    <>
                        {event?.people.find((id) => id === user?._id)?(
                            <button className="btn btn-danger m-1" onClick={() => {
                                dispatch(joinEventAction(event?._id));
                                navigate('/events')
                            }}>Cancel</button>
                        ):(
                            <>
                                <button disabled={!user?._id} className="btn btn-success m-1" onClick={() => dispatch(joinEventAction(event?._id))}>Join</button>
                                <button className="btn btn-warning m-1" onClick={() => navigate(`/events`)}>Show All</button>
                            </>
                        )}
                    </>
                ):""}
            </div>
        </div>
    )
}

export default Event