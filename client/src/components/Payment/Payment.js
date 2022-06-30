import React from 'react'
import './paymentMethod.css'
import { useNavigate } from 'react-router-dom';


const Payment = ({ price }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container mt-4 p-5 d-flex justify-content-center" style={{width:"400px", height:"500px"}}>
                <div className="card">
                    <div className="d-flex justify-content-between px-3 pt-4">
                        <span className="pay">Pay amount</span>
                        <div className="amount">
                            <div className="inner">
                                <span className="dollar">{ price? "LE." : "200 LE" } </span>
                                <span className="total"> { price? price : "" } </span>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 pt-3">
                        <label htmlFor="card number" className="d-flex justify-content-between">
                            <span className="labeltxt">CARD NUMBER</span>
                            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt='payment' width="25" className="image" />
                            </label>	
                        <input type="number" name="number" className="form-control inputtxt" placeholder="8581 2545 2545 2245"/>
                    </div>
                    <div className="d-flex justify-content-between px-3 pt-4">
                        <div>
                            <label htmlFor="date" className="exptxt"> Expiry </label>
                            <input type="number" name="number" pattern='.{2,}' className="form-control expiry" placeholder="MM / YY"/>
                        </div>	
                        <div>
                            <label htmlFor="cvv" className="cvvtxt">CVV / CVC</label>
                            <input type="number" name="number" className="form-control cvv"/>
                        </div>	
                    </div>	
                    <div className="d-flex justify-content-between px-3 pt-4 pb-4">
                        <div>
                            <button type="button" className="btn btn-light cancel" onClick={() => navigate('/gallary')}>Cancel</button>
                        </div>	
                        <div>
                            <button type="button" className="btn btn-primary payment">Make Payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment