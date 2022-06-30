import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { userContext } from './../context/userContext';
// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/actions/authActions';

const Login = () => {
    const navigate = useNavigate();

    const {user} = useContext(userContext);
    const {setUserLogged} = useContext(userContext);


    useEffect(() => {
        if(user)
            navigate('/')
    })



    const [msg, setMsg] = useState("")


    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/users/login',formData).then(res => {
            if(res.data.message){
                setMsg(res.data.message)
            }else if(res.data.token){
                localStorage.setItem("user",JSON.stringify(res.data.user))
                localStorage.setItem("token",JSON.stringify(res.data.token))
                setUserLogged(true)
                navigate('/gallary')
            }
        }).catch(err=> {
            console.log(err.response.data.token)
        })
    }

    return (
        <>    
            <div className="text-center">
                <main className="form-signin">
                    <form onSubmit={handleSubmit}>
                        <h4>Login</h4><br />
                        
                        <div className="form-floating">
                        <input
                            required
                            type="email" 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com" 
                            onChange={(e) => setFormData({...formData,email:e.target.value})} />
                        <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                        <input
                            required
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Password"
                            onChange={(e) => setFormData({...formData,password:e.target.value})} />
                        <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 mt-2 btn btn-lg btn-primary" type="submit">Login</button>
                    </form> <br />
                    {msg==='Invalid email or password'?(
                            <div className="alert alert-danger" role="alert">{msg}</div>
                        ):msg==='Welcome'?(
                            <div className="alert alert-success" role="alert">{msg}</div>
                        ):""}
                    <span className='p-2'>Forget your password?</span>
                    <Link to='/forget-password'>Recover it</Link> <br />
                    <span className='p-2'>Don't have an account?</span>
                    <Link to='/register'>Sign up</Link>
                    <p className="mt-3 mb-3 text-muted">&copy; Art Corner 2022</p>
                </main>
            </div>
        </>
    )
}

export default Login