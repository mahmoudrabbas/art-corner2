import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Drawing from './../Drawing/Drawing';

const ShowDrawings = () => {

    const {id} = useParams();
    const [drawings, setDrawings] = useState([])

    useEffect(() => {
        const getDrawings = async () => {
            const {data} = await axios.get(`http://localhost:5000/drawings/all_drawings/${id}`)
            setDrawings(data)
        }
        getDrawings();
    },[id])

    console.log(drawings)

    return (
        <>
        <div className="row py-3 px-6"> 
            <div className="col-md-11 mx-auto">

                <div className="bg-white shadow rounded overflow-hidden">
                    <div  className="px-4 pt-5 pb-5 cover"> 
                        <div className="media align-items-end profile-head">
                            <div className="media-body mb-5 text-white">
                                
                            </div>
                        </div>
                    </div> 

                    <div className="p-4 d-flex justify-content-end"> 
                            <ul className="list-inline mb-0"> 
                                <li className="list-inline-item"> 
                                    <h5 className="font-weight-bold mb-0 d-block">{drawings.length} <i className="fas fa-image mr-1"></i></h5>
                                    <small className="text-dark">Drawings</small>
                                </li>
                            </ul>
                        </div>

                    <div className="py-4 px-4"> 
                            <div className="row">
                                {drawings.length? (
                                    drawings.map(drawing => (
                                        <Drawing key={drawing._id} drawing={drawing} />
                                    ))
                                ): (
                                    <h5>This artist has no drawings yet</h5>
                                )}
                                

                            </div>
                        </div>
                </div> 
            </div>
        </div>
    </>
    )
}

export default ShowDrawings