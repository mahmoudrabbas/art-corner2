import React, { useState } from 'react'
import Drawing from '../Drawing/Drawing'
import { useSelector, useDispatch } from 'react-redux';
import { filterDrawingsByGategory, getAllDrawingsAction } from './../../redux/actions/drawingActions';
// import { deleteEventAction } from './../../redux/actions/eventActions';
// import { Link, useNavigate } from 'react-router-dom';
import Event from './../Event/Event';

const Gallary = () => {


    const dispatch = useDispatch();
    // const navigate = useNavigate();


    const [category, setGategory] = useState("pencil");

    const drawings = useSelector(state => state.drawings);
    const event = useSelector(state => state.events)[0]


    // const user = JSON.parse(localStorage.getItem('user'))




    return (
        <>
            <div className='container-fluid'>
                <div className='row p-1'>
                    <div className='container2 pt-2' >
                        <div className='col-9 p-3' style={ {display:"flex",flexWrap:"wrap"} }>
                            {drawings.length?drawings.map((drawing) => (
                                <Drawing drawing={drawing} key={drawing._id} />
                                )):(
                                    <div className="spinner-border mt-1" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            )}
                        </div>

                        <div className='col-3 p-2' style={{ borderLeft:"1px solid #ccc", maxHeight:"660px" }}>

                            <div className='card m-2 p-2'>
                                <h5 className='p-1'>Filter</h5>
                                <div className='form'>
                                    <div className="row mt-1">
                                        <div className="col-md-12 mt-1">
                                            <label className="labels mb-1">Category</label>
                                            <select onChange={(e) => setGategory(e.currentTarget.value)} className="form-select" aria-label="Default select example">
                                                <option>Select Category</option>
                                                <option value="mandala">Mandala</option>
                                                <option value="digital">Digital</option>
                                                <option value="pencil">Pencil</option>
                                                <option value="oil">Oil</option>
                                                <option value="ink">Ink</option>
                                                <option value="Cartoon">Cartoon</option>
                                                <option value="watercolor">watercolor</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button onClick={() => dispatch(filterDrawingsByGategory(category))} className="btn btn-secondary" >Filter</button>
                                    <button onClick={() => dispatch(getAllDrawingsAction())} className="btn btn-danger m-2">Cancel</button>
                                </div>
                            </div>


                            {event? (
                                <Event event={event} />
                            ):""}


                            <div className='card m-2 p-2'>
                                <h5 className='p-1'>Advertising space</h5>
                                <p>Put your ADs here!</p>
                                <span>contact us</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallary