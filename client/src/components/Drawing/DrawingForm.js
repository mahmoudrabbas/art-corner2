import React, { useEffect, useState } from 'react'
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createDrawingAction } from '../../redux/actions/drawingActions';
import { useNavigate } from 'react-router-dom';
// import { userContext } from './../context/userContext';


export const DrawingForm = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)

    const dispatch = useDispatch();
    const navigate =  useNavigate();

    const [msg, setMsg] = useState("")
    const [drawingeData, setDrawingData] = useState({
        title:"",
        category:"",
        drawing:"",
        price:0
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(drawingeData.drawing !== ""){
            dispatch(createDrawingAction({...drawingeData,artistId:user?._id,artist:user?.fullName}))
            navigate(`/user/${user._id}`)
        }else {
            setMsg("Please Enter The drawing!")
        }
    }

    useEffect(() => {
    }, [navigate])

    return (
        <>
            <div className="text-center1 mt-1">
                <main className="form-signin">
                    <form onSubmit={handleSubmit}>
                        <h4>Add New Drawing</h4>

                        <div className="form-floating">
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Upload Drawing</label>
                                <FileBase64 multiple={false} onDone={({base64}) => setDrawingData({...drawingeData,drawing:base64}) } className="form-control" type="file" id="formFile" />
                            </div>
                        </div>

                        <div className="form-floating">
                            <input
                                required
                                type="text" 
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setDrawingData({...drawingeData,title:e.target.value})} />
                            <label htmlFor="floatingInput">Drawing Title</label>
                        </div>


                        <div className="form-floating">
                        <select onChange={(e) => setDrawingData({...drawingeData,category:e.target.value})} className="form-select" aria-label="Default select example">
                                <option>Select Category</option>
                                <option value="mandala">Mandala</option>
                                <option value="digital">Digital</option>
                                <option value="pencil">Pencil</option>
                                <option value="oil">Oil</option>
                                <option value="ink">Ink</option>
                                <option value="ink">Ink</option>
                                <option value="Cartoon">Cartoon</option>
                                <option value="watercolor">watercolor</option>
                                <option value="other">Other</option>
                            </select>
                            <label htmlFor="floatingInput">Cateory</label>
                        </div>

                        <div className="form-floating">
                            <input
                                required
                                type="number"
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setDrawingData({...drawingeData,price:e.target.value})} />
                            <label htmlFor="floatingInput">Price in LE</label>
                        </div>


                        <button className="w-100 mt-2 btn btn-lg btn-primary" type="submit">Upload</button>
                        {msg?(
                            <p className='alert alert-danger mt-1 text-center'>{msg}</p>
                        ):""}
                    </form>
                </main>
            </div>
        </>
    )
}
