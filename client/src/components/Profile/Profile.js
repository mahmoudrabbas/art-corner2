import React, { useEffect, useState } from 'react'
import FileBase64 from 'react-file-base64';

import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import './Profile.css'
import axios from 'axios';
import Drawing from '../Drawing/Drawing';
import { useDispatch } from 'react-redux';
import { createOrderAction } from './../../redux/actions/orderActions';
const Profile = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    const {id} = useParams();

    const [profile, setProfile] = useState({})
    const [drawings, setDrawings] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const {data} = await axios.get(`http://localhost:5000/users/${id}`)
            setProfile(data)
        }
        getUser();
    },[navigate,id])

    useEffect(() => {
        const getUser = async () => {
            const {data} = await axios.get(`http://localhost:5000/drawings/user_drawings/${id}`)
            setDrawings(data)
        }
        getUser();
    },[navigate,id])

    const dispatch = useDispatch();


    const [orderData, setOrderData] = useState({
        client:"",
        clientId:"",
        artist:"",
        artistId:"",
        price:"",
        address:"",
        picture:"",
        message:"",
        date:"",
        tel:""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createOrderAction({ ...orderData, client:user?.fullName, clientId:user?._id, artist:profile?.fullName, artistId:profile?._id }))
        // navigate(`/user/${id}`)
    }


    return (
        <>
            <div className="row py-3 px-6"> 
                <div className="col-md-11 mx-auto">

                    <div className="bg-white shadow rounded overflow-hidden">
                        <div  className="px-4 pt-5 pb-5 cover"> 
                            <div className="media align-items-end profile-head">
                                <div className="profile mr-3">
                                    <img src={profile?.profile_picture?profile?.profile_picture:"/defaultpp.png"} alt={'pp'} style={{objectFit:"cover" }} width="150" height="150" className="rounded-circle mb-2" />
                                </div> 

                                <div className="media-body mb-5 text-white">
                                    <h5 className="mt-0 mb-0">{(user?._id === id) ?(`${profile?.fullName} (You)`): profile?.fullName}</h5> 
                                    <p className="small mb-3"> <i className="fas fa-map-marker-alt mr-3"></i> {profile?.address}</p>
                                    <ul className="list-inline mb-0"> 
                                    {user?._id === id ? (
                                        <>
                                            <li className="list-inline-item">
                                                <Link to="/settings" className="btn btn-danger btn">Edit profile</Link>
                                            </li>
                                            {profile?.account_type === 'artist'? (
                                                <>
                                                    <li className="list-inline-item">
                                                        <Link to="add-drawing" className="btn btn-light btn">Upload drawing</Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="upload-course" className="btn btn-primary btn">Upload course</Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="make-event" className="btn btn-secondary btn">Make event</Link>
                                                    </li>
                                                </>
                                            ):""}
                                        </>
                                    ): (
                                        <li className="list-inline-item">
                                            {profile?.account_type === 'artist'?(
                                                <button type='button' disabled={!user?._id} className="btn btn-primary btn" data-bs-toggle="modal" data-bs-target="#orderModal">Make Order</button>
                                            ):""}
                                        </li>
                                    )}
                                    </ul>
                                </div>
                            </div>
                        </div> 

                        {profile?.bio?(
                            <div className="px-4 py-3">
                                <h5 className="mb-0">Bio</h5>
                                <div className="p-4 rounded shadow-sm bg-light">
                                    <p className="font-italic mb-0">{profile?.bio}</p>
                                </div>
                            </div>
                        ):""}
                        <Outlet />


                        <div className="py-4 px-4"> 
                        
                            {user?.account_type === 'artist'? (
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <span className="mb-0"><Link to=''>Recent photos</Link></span> 
                                    <span className="mb-0 m-2"><Link to={`/all-courses/${profile?._id}`}>Courses</Link></span>
                                </div>
                                <Link to={`/all-drawings/${profile?._id}`} className="btn btn-link text-muted">Show all</Link>
                            </div>

                            ):""}
                            <div className="row">
                                {drawings?.length? (
                                    drawings.map(drawing => (
                                        <Drawing key={drawing?._id} drawing={drawing} />
                                    ))
                                ): (
                                    <p>{profile?.fullName?.split(" ")[0]} has no drawings yet</p>
                                )}
                            </div>
                        </div>
                    </div> 
                </div>






                <div className="modal fade" id="orderModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Make order request</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                
                                <div className='form'>

                                    <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label">Upload picture</label><br></br>
                                        <div className='input-file'>
                                            <FileBase64 multiple={false} onDone={({base64}) => setOrderData({...orderData,picture:base64}) } />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Your address</label>
                                        <input type="text" onChange={(e) => setOrderData({ ...orderData,address:e.currentTarget.value })} className="form-control" id="address" placeholder='Drawing will be sent to this address, so write it correct!' />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Phone number</label>
                                        <input type="text" onChange={(e) => setOrderData({ ...orderData,tel:e.currentTarget.value })} className="form-control" id="address" placeholder='It will only appear to the artist to get in touch!' />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">Price in LE</label>
                                        <input type="number" onChange={(e) => setOrderData({ ...orderData,price:e.currentTarget.value })} className="form-control" id="price"  placeholder='Paying on receving' />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">When do you want to recieve it?</label>
                                        <input type="date" onChange={(e) => setOrderData({ ...orderData,date:e.currentTarget.value })} className="form-control" id="date" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">Write a message to artist! (option)</label>
                                        <textarea type="text" onChange={(e) => setOrderData({ ...orderData,message:e.currentTarget.value })} className="form-control" id="date" placeholder='You can explain your order in detail if you want..'></textarea>
                                    </div>

                                    <p>Note: this request may get rejected!</p>


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


export default Profile