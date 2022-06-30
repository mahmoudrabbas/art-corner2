
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deleteDrawingAction } from './../../redux/actions/drawingActions';
import { Link, useNavigate } from 'react-router-dom';
import { addProductAction } from '../../redux/actions/cartActions';
import { useState } from 'react';
import { makeReportAction } from './../../redux/actions/reportActions';


const Drawing = ({drawing}) => {
    
    const user = JSON.parse(localStorage.getItem('user'));

    const dispatch = useDispatch()
    const navigate = useNavigate();


    const [reportData, setReportData] = useState({
        reporterId:"",
        artistId:"",
        drawingId:"",
        reason:"",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(makeReportAction({ ...reportData, reporterId:user?._id, artistId:drawing?.artistId, drawingId:drawing?._id }))
    }

    return (
        <>
            <div className='drawing m-2' style={{width: "20rem",Height:"20rem",border:"none"}}>
                <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
                    <h6><span style={{textTransform:"capitalize"}}>{drawing?.title}</span></h6>
                    <span style={{fontSize:"0.9em"}}>{moment(drawing?.date).fromNow()}</span>
                </div>
                <div className="card bg-dark text-white" style={{border:"none"}} >    
                    <span onClick={() => navigate(`/gallary/drawing/${drawing._id}`)}><img src={drawing?.drawing} style={{objectFit:"cover"}} className="card-img" alt="..." /></span>
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}} className="card-img-overlay">
                        <h5 className="card-title">
                            <p style={{textTransform:"capitalize"}} className='badge bg-info'>{!drawing?.price?"Free": (
                                <>
                                    {drawing?.price} .LE
                                </>
                            )} </p>
                        </h5>
                        {user?._id === drawing?.artistId || user?.isAdmin?  (
                            <button type="button" onClick={() => dispatch(deleteDrawingAction(drawing?._id))} className="btn-close btn-close-white" data-bs-toggle="tooltip" data-bs-placement="right" title="delete" aria-label="Close"></button>
                        ):(
                            user?._id?(
                                <span><i style={{color:"white"}} className="fa-solid fa-ellipsis btn" data-bs-toggle="modal" data-bs-target="#reportModal" data-bs-placement="right" title="Report"></i></span>
                            ):("")
                        )}
                    </div>
                </div>
                <div className='p-2' style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
                    <Link style={{fontWeight:"600"}} to={`/user/${drawing?.artistId}`}>{drawing?.artist}</Link>
                    <p style={{fontWeight:"500"}}>#{drawing?.category}</p>
                    {(user?._id === drawing?.artistId)? (
                        <button className='btn btn-sm' onClick={() => navigate(`/drawings/edit/${drawing?._id}`)}>
                            <i className="fa-solid fa-ellipsis"></i>
                        </button>
                    ):(
                        <button type='button' disabled={!user?._id} className='btn btn-success btn-sm' onClick={() => {
                            dispatch(addProductAction( {...drawing, clientId: user?._id}))
                            navigate(`/payment`)
                            }}
                            >Buy</button>
                    )}
                </div>

                <div className="modal fade" id="reportModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Report</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                
                                <div className='form'>

                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">Reason(s) let you report this (option)</label>
                                        <textarea type="text" onChange={(e) => setReportData({ ...reportData,reason:e.currentTarget.value })} className="form-control" id="date" placeholder='Tell us why you report this drawing..'></textarea>
                                    </div>


                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" onClick={handleSubmit} data-bs-dismiss="modal" className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </>
    )
}

export default Drawing