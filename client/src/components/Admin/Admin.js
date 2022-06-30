import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Admin = () => {

    const issues = useSelector(state => state.mails)[0];
    const reports = useSelector(state => state.reports)[0];
    const events = useSelector(state => state.events);
    const books = useSelector(state => state.books);

    return (
        <>
            <div className='container-fluid m-0'>
                <div className='row bg-white'>
                    <div style={{background:"#eee",minHeight:"93.3vh",color:"red"}} className='col-2 p-2'>
                        <h5 className='text-dark'> <i className="fa-solid fa-gauge text-dark"></i> Dashboard</h5><hr />
                        <h6> <i className="fa-solid fa-globe text-dark"></i> Pages</h6> <hr />
                        <ul>
                            <li><Link to='reports'> <i className="fa-solid fa-list-check text-dark"></i> Reports ({reports?.length})</Link></li> <hr />
                            <li><Link to='issues'> <i className="fa-solid fa-screwdriver-wrench text-dark"></i> Issues ({issues?.length})</Link></li> <hr />
                            <li><Link to='events'><i className="fa-solid fa-calendar-days text-dark"></i> Events ({events?.length})</Link></li> <hr />
                            <li><Link to='books'><i className="fa-solid fa-book text-dark"></i> Books ({books?.length})</Link></li> <hr />
                        </ul>
                        <h6> <i className="fa-solid fa-circle-dot text-dark"></i> Actions</h6> <hr />
                        <ul>
                            <li><Link to='delete-user'> <i className="fa-solid fa-circle-minus"></i> Delete user</Link></li> <hr />
                            <li><Link to='delete-course'> <i className="fa-solid fa-circle-minus"></i> Delete course</Link></li> <hr />
                            <li><Link to='delete-event'><i clasName="fa-solid fa-circle-minus"></i> Delete Event</Link></li> <hr />
                            <li><Link to='delete-drawing'><i className="fa-solid fa-circle-minus"></i> Delete Drawing</Link></li> <hr />
                        </ul>
                    </div>

                    <div className='col-8 p-5'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin