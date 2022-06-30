import React,{Component} from 'react';
import './paymentMethod.css'
// import {Container} from 'react-bootstrap'




class PaymentMethod extends Component {

state={

}



render(){

return(
<React.Fragment>

<div className="container mt-5 d-flex justify-content-center main">
	<div className="card">
        <div className="d-flex justify-content-between px-3 pt-4">
        <span className="pay">Pay amount</span>
        <div className="amount"><div className="inner">
        <span className="dollar">£E</span>
        <span className="total">32</span>
        </div>
        </div>
        </div>
        <div className="px-3 pt-3">
        <label for="card number" className="d-flex justify-content-between">
        <span className="labeltxt">CARD NUMBER</span>
        <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt='payment' width="25" className="image" />
        </label>	
        <input type="number" name="number" className="form-control inputtxt" placeholder="8581 2545 2545 2245"/>
        </div>
        <div className="d-flex justify-content-between px-3 pt-4">
        <div>
        <label for="date" className="exptxt"> Expiry </label>
        <input type="number" name="number" className="form-control expiry" placeholder="MM / YY"/>
        </div>	
        <div>
        <label for="cvv" className="cvvtxt">CVV / CVC</label>
        <input type="number" name="number" className="form-control cvv"/>
        </div>	</div>	<div className="d-flex justify-content-between px-3 pt-4 pb-4">
        <div>
        <button type="button" className="btn btn-light cancel">Cancel</button>
        </div>	
        <div>
        <button type="button" className="btn btn-primary payment">Make Payment</button></div>
        </div>
        </div>
</div>



</React.Fragment>



)


}





}
 export default PaymentMethod;