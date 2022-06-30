import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteBookAction } from './../../redux/actions/bookActions';
import { Link } from 'react-router-dom';

const Book = ({book}) => {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <div className="card mb-3" style={{maxWidth: "600px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <Link to={`/read-book/${book?._id}`}><img src={book?.cover} className="img-fluid rounded-start" alt="..." /></Link>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div style={{display:"flex",justifyContent:"space-between"}} className='to-close'>
                                <h4 style={{textTransform:"capitalize"}} className="card-title">{book?.title}</h4>
                                {user?.isAdmin&&<button type="button" onClick={() => dispatch(deleteBookAction(book?._id))}  className="btn-close" aria-label="Close"></button>}
                            </div>
                            <h6 className="card-title">{book?.year}</h6>
                            <p className="card-text"><small className="text-muted">{book?.author}</small></p>
                            <p className="card-text">{book?.description}</p>
                            <i className="fa-solid fa-download"></i><a href={`${book?.book}`} download> Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Book
