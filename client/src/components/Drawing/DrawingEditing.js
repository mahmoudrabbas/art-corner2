import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateDrawingAction } from './../../redux/actions/drawingActions';
const DrawingEditing = () => {

    const id =useParams().id;

    const drawing = useSelector(state => state.drawings.filter(drawing => drawing._id === id)[0])


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [drawingData, setDrawingData] = useState({...drawing})

    const handleSubmit = async (e) => {
        e.preventDefault();
            dispatch(updateDrawingAction(id, {...drawingData}))
            navigate(`/gallary`)
    }
    return (
        <React.Fragment>
            <form className="setting-style" onSubmit={handleSubmit}>
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Drawing Edit</h4>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12 mt-2"><label className="labels">Title</label><input type="text" className="form-control" value={drawingData.title} onChange={(e)=> setDrawingData({...drawingData,title:e.currentTarget.value})} /></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12 mt-1"><label className="labels">Category</label><input type="text" className="form-control" value={drawingData.category} onChange={(e)=> setDrawingData({...drawingData,category:e.currentTarget.value})} /></div>
                                    <div className="col-md-12 mt-3"><label className="labels">Course Price (LE)</label><input type="text" className="form-control" value={drawingData.price} onChange={(e)=> setDrawingData({...drawingData,price:e.currentTarget.value})}/></div>
                                </div>
                                <button className="btn btn-primary profile-button mt-4" type="submit">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}

export default DrawingEditing