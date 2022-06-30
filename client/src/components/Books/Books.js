import Book from './Book';
// import BookForm from './BookForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Books = () => {

    const books = useSelector((state) => state.books)
    // const dispatch = useDispatch();
    const navigate = useNavigate();


    // const [category, setGategory] = useState("pencil");

    // const drawings = useSelector(state => state.drawings);
    const event = useSelector(state => state.events)[0]


    const user = JSON.parse(localStorage.getItem('user'))
    
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-9 mt-2'>
                    {!books.length?(
                        <div className="spinner-border mt-1" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ):(
                        books.map(book => (
                            <Book book={book} key={book._id} />
                        ))
                    )}
                </div>

                <div className='col-3 p-2' style={{ borderLeft:"1px solid #ccc", maxHeight:"660px" }}>

                            {/* <div className='card m-2 p-2'>
                                <h5 className='p-1'>Filter</h5>
                                <div className='form'>
                                    <div className="row mt-1">
                                        <div className="col-md-12 mt-1">
                                            <label className="labels mb-1">Category</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option>Select Category</option>
                                                <option value="mandala">Mandala</option>
                                                <option value="digital">Digital</option>
                                                <option value="pencil">Pencil</option>
                                                <option value="oil">Oil</option>
                                                <option value="ink">Ink</option>
                                                <option value="ink">Ink</option>
                                                <option value="Cartoon">Cartoon</option>
                                                <option value="watercolor">watercolor</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className="btn btn-secondary" >Filter</button>
                                    <button className="btn btn-danger m-2">Cancel</button>
                                </div>
                            </div> */}


                            {event? (
                                <div className='card m-2'>
                                    <div className="card-header" style={{display:"flex", justifyContent:"space-between"}}>
                                        <span>{event?.eventName}</span>
                                        {(user?._id === event?.artistId)?(
                                            <button type="button" className="btn-close btn-close-dark" data-bs-toggle="tooltip" data-bs-placement="right" title="delete" aria-label="Close"></button>
                                        ): (
                                            <p className='badge bg-info p-2'>LE {event?.price}</p>
                                        )}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"> <Link to={`/user/${event?.artistId}`}>{event?.artist}</Link></h5>
                                        <p className="card-text">- Description: {event?.eventDescription}</p>
                                        <p className="card-text">- Location: {event?.location}</p>
                                        <p className="card-text">- On: {event?.date}</p>
                                        <p className="card-text">- Time: {event?.time}</p>
                                        {(user?._id !== event?.artistId)? (
                                            <>
                                                <button disabled={!user?._id} className="btn btn-primary m-1">Join</button>
                                                <button disabled={!user?._id} className="btn btn-warning m-1" onClick={() => navigate(`/events`)}>Check all events</button>
                                            </>
                                            ):""}
                                    </div>
                                </div>
                            ):""}


                            <div className='card m-2 p-2'>
                                <h5 className='p-1'>Advertising space</h5>
                                <p>Put your ADs here!</p>
                                <span>contact us</span>
                            </div>





                        </div>
            </div>
        </div>
    )
}

export default Books