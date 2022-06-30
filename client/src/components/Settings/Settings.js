import React, { useState } from 'react'
// import { userContext } from './../context/userContext';
import FileBase64 from 'react-file-base64';
import './settings.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Settings = () => {
    const navigate = useNavigate();

    // const {user} = useContext(userContext);
    const user = JSON.parse(localStorage.getItem('user'));


    const [formData, setFormData] = useState(user)

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.patch(`http://localhost:5000/users/settings/${user._id}`,formData).then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data));
            navigate(`/user/${user._id}`)
        })
        .catch(err => console.log(err));
    }
    
    
    return (
        <React.Fragment>
            <form className="setting-style" onSubmit={handleSubmit}>
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle" style={{objectFit:"cover"}} alt="dd" width="150px" height="150px" src={formData?.profile_picture?formData?.profile_picture:"/defaultpp.png"}/>
                                <span className="font-weight-bold">{user.fullName}</span>
                                <label htmlFor='profile-picture' className="labels">Change</label>
                                {/* <input style={{width:"14em"}} type="file" id="profile-picture" class="form-control form-control-sm"  /> */}
                                <div className="input-file">
                                    <FileBase64 multiple={false} onDone={({base64}) => setFormData({...formData,profile_picture:base64}) } style={{width:"14em"}} type="file" id="profile-picture" class="form-control form-control-sm" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Profile Settings</h4>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12 mt-2"><label className="labels">Full Name</label><input type="text" className="form-control" value={formData.fullName} onChange={(e)=> setFormData({...formData,fullName:e.currentTarget.value})} /></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12 mt-1"><label className="labels">Email</label><input type="email" className="form-control" value={formData.email} onChange={(e)=> setFormData({...formData,email:e.currentTarget.value})} /></div>
                                    <div className="col-md-12 mt-3"><label className="labels">Mobile Number</label><input type="tel" className="form-control" value={formData.number} onChange={(e)=> setFormData({...formData,number:e.currentTarget.value})}/></div>
                                    <div className="col-md-12 mt-3"><label className="labels">Address </label><input type="text" className="form-control" value={formData.address} onChange={(e)=> setFormData({...formData,address:e.currentTarget.value})}/></div>
                                    <div className="col-md-12 mt-3"><label className="labels">Age</label><input type="text" className="form-control" value={formData.age} onChange={(e)=> setFormData({...formData,age:e.currentTarget.value})}/></div>
                                    <div class="col-md-12 mt-3">
                                        <div class="form-floating">
                                            <textarea onChange={(e)=> setFormData({...formData,bio:e.currentTarget.value})} class="form-control" placeholder="Write your bio here" id="floatingTextarea2" value={formData.bio} style={{height: "100px"}}></textarea>
                                            <label for="floatingTextarea2">Your bio</label>
                                        </div>
                                    </div>
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

export default Settings