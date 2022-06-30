import axios from 'axios';
import React, {useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/userContext'

const Register = () => {
    const navigate = useNavigate();


    const {user} = useContext(userContext);    

    useEffect(() => {
        if(user)
            navigate('/')
    })



    const [msg, setMsg] = useState("")

    const [formData, setFormData] = useState({
        fullName:"",
        email:"",
        password:"",
        number:"",
        address:"",
        account_type:"user",
    })

    const handleSubmit = async (e) => {

        e.preventDefault();

        await axios.post('http://localhost:5000/users/register',formData)
        .then(res => {
            if(res.data.message){
                console.log(res.data.message)
                setMsg(res.data.message)
            }else if(res.data.user){
                console.log(res)
                navigate('/welcome')
            }
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <>
            <div className="text-center">
                <main className="form-signin">
                    <form onSubmit={handleSubmit}>
                        <h4>Sign Up</h4><br />
                        <div className="form-floating">
                            <input
                                autoFocus
                                required
                                type="text" 
                                className="form-control" 
                                id="floatingInput"
                                placeholder='Full Name' 
                                onChange={(e) => setFormData({...formData,fullName:e.target.value})} />
                            <label htmlFor="floatingInput">Full Name</label>
                        </div>
            
                        <div className="form-floating">
                            <input
                                required
                                type="email" 
                                className="form-control" 
                                id="floatingInput" 
                                placeholder='f'
                                onChange={(e) => setFormData({...formData,email:e.target.value})} />
                            <label htmlFor="floatingInput">Email address</label>
                            </div>
                        <div className="form-floating">
                            <input
                                required
                                type="tel" 
                                className="form-control" 
                                id="floatingInput"
                                placeholder='s' 
                                onChange={(e) => setFormData({...formData,number:e.target.value})} />
                            <label htmlFor="floatingInput">Phone Number</label>
                        </div>
                        {/* <div className="form-floating">
                            <input
                                required
                                type="number"
                                min={16}
                                className="form-control" 
                                id="floatingInput"
                                placeholder='s' 
                                onChange={(e) => setFormData({...formData,age:e.target.value})} />
                            <label htmlFor="floatingInput">Age</label>
                        </div> */}
                        <div className="form-floating">
                            <select required onChange={(e) => setFormData({...formData,account_type:e.target.value})} className="form-select" aria-label="Default select example">
                                <option defaultValue="user" value="user">User</option>
                                <option value="artist">Artist</option>
                            </select>
                            <label htmlFor="floatingInput">Choose Account Type</label>
                        </div>
                        <div className="form-floating">
                            <input
                                required
                                type="text"
                                className="form-control" 
                                id="floatingInput"
                                placeholder='d' 
                                onChange={(e) => setFormData({...formData,address:e.target.value})} />
                            <label htmlFor="floatingInput">Address</label>
                        </div>
                        <div className="form-floating">
                            <input
                                required 
                                type="password" 
                                className="form-control" 
                                id="floatingPassword" 
                                placeholder='s'
                                onChange={(e) => setFormData({...formData,password:e.target.value})} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button className="w-100 mt-2 btn btn-lg btn-primary" type="submit">Sign up</button>

                    </form><br />
                    {msg==='Email is already exist'?(
                            <div className="alert alert-danger" role="alert">{msg}</div>
                        ):msg==='Welcome'?(
                            <div className="alert alert-success" role="alert">{msg}</div>
                        ):""}
                    <span className='p-2'>Already have an account?</span>
                    <Link to='/login'>Sign in</Link>
                    <p className="mt-3 mb-3 text-muted">&copy; Art Corner 2022</p>
                </main>
            </div>
        </>
    )
}

export default Register