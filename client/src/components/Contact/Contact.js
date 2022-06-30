import React, { useState } from 'react'
import './ContactUs.css'
import { useDispatch } from 'react-redux';
import { makeMailAtion } from './../../redux/actions/mailActions';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [mail, setMail] = useState({ name:"", email:"", message: ""});

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(makeMailAtion({ ...mail }))
        navigate('/gallary');
    }


    return (
        <>
            <div className="container rounded d-flex justify-content-center bg-white mt-2 p-5">
                <div className="row my-2 mx-2">
                    <div className="col-md-6">
                        <img className="contacatimg" src="https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-message-icon-design-vector-png-image_1587713.jpg" alt="IMG"/>	
                    </div>
                    <div className="col-md-6">
                        <h1 className="form-title">Contact us</h1>
                        <h4 className="justify text-muted">Welcome to Art Corner....<br/>
                        Have an enquiry or would like to give us feedback?
                        <br/>Fill out the form below to contact our team.</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group pt-2 pl-1">
                                <label htmlFor="exampleInputName">Your name</label>
                                <input required type="text" onChange={(e) => setMail({ ...mail, name: e.target.value })} className="form-control rounded p-1" id="exampleInputName"/>
                            </div>
                            <div className="form-group pl-1">
                                <label htmlFor="exampleInputEmail1">Your email address</label>
                                <input required type="email" onChange={(e) => setMail({ ...mail, email: e.target.value })} className="form-control rounded p-1" id="exampleInputEmail1"/>
                            </div>
                            <div className="form-group pl-1">
                                <label htmlFor="exampleFormControlTextarea1">Your message</label>
                                <textarea required onChange={(e) => setMail({ ...mail, message: e.target.value })} className="form-control rounded" id="exampleFormControlTextarea1" rows="10"></textarea>
                            </div>
                            <div className="row">
                                <div className="col-md-3 offset-md-9"><button type="submit" className="sendcontact btn btn-primary btn mt-2">Send</button></div>
                            </div>
                        </form>
                    </div>
                </div>    		
            </div>
        </>
    )
}

export default Contact