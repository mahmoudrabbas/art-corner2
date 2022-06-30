import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const RecoverPassword = () => {
    const [email, setEmail] = useState("");
    const [checker, setChecker] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(email){
            setChecker(true);
        }
    }
    return (
        <div className="text-center">
                <main className="form-signin">
                    <h5>Confirm Email</h5><br />
                    {!checker?(
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating">
                                <input
                                    required
                                    type="email" 
                                    className="form-control" 
                                    id="floatingInput" 
                                    placeholder="name@example.com" 
                                    onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="floatingInput">write your email!</label>
                                </div>
                            <button className="w-100 mt-2 btn btn-lg btn-primary" type="submit">send link</button>
                        </form>
                    ):(
                        <div style={{width:"100%", border:"1px solid #ccc", borderRadius:"5px", padding:"20px 10px ",borderLeft:"4px solid red"}}>
                            <p>Thank you, we've just sent you a link to recover the password</p>
                            <h6>Is there anything else? <Link to='/contact'>Support</Link></h6>
                            <h6>Go back to sign page? <Link to='/login'>Sign</Link></h6>
                        </div>
                    )}
                    
                    <p className="mt-3 mb-3 text-muted">&copy; Art Corner 2022</p>
                </main>
        </div>
    )
}

export default RecoverPassword