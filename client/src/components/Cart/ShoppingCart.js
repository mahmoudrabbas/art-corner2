import React,{Component} from 'react';
import './ShoppingCart.css'
// import {Container} from 'react-bootstrap'
import { Link } from "react-router-dom";




class ShoppingCart extends Component {

state={

}



render(){

return(
<React.Fragment>


<div className="container-fluid">
        <div className="row">
            <aside className="col-lg-9">
                <div className="paintingcard">
                    <div className="table-responsive">
                        <table className="table table-borderless table-shopping-cart">
                            <thead className="text-muted">
                                <tr className="small text-uppercase">
                                    <th scope="col">Product</th>
                                    <th scope="col" width="120">Price</th>
                                    <th scope="col" className="text-right d-none d-md-block" width="200"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <figure className="itemside align-items-center">
                                            <div className="aside"><img src="/1.jpg" alt="ff" className="img-sm"/></div>
                                            <figcaption className="info"> <a href="/" className="title text-dark" data-abc="true">pencel art </a>
                                                <p className="text-muted small">SIZE: 25*35 <br/> Artist: Haitham gomaa</p>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    
                                    <td>
                                        <div className="price-wrap"> <var className="price">£E 10.00</var> </div>
                                    </td>
                                    <td className="text-right d-none d-md-block"> <a href="/" className="btn btn-light" data-abc="true"> <i className="bi bi-trash3-fill"></i></a> </td>
                                </tr>
                                <tr>
                                    <td>
                                        <figure className="itemside align-items-center">
                                            <div className="aside"><img src="/1.jpg" alt="ff" className="img-sm"/></div>
                                            <figcaption className="info"> <a href="/" className="title text-dark" data-abc="true">pencel art </a>
                                                <p className="text-muted small">SIZE: 25*35 <br/> Artist: Haitham gomaa</p>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    
                                    <td>
                                        <div className="price-wrap"> <var className="price">£E 10.00</var> </div>
                                    </td>
                                    <td className="text-right d-none d-md-block"> <a href="/" className="btn btn-light" data-abc="true"> <i className="bi bi-trash3-fill"></i></a> </td>
                                </tr>
                                <tr>
                                    <td>
                                        <figure className="itemside align-items-center">
                                            <div className="aside"><img src="/1.jpg" alt="ff" className="img-sm"/></div>
                                            <figcaption className="info"> <a href="/" className="title text-dark" data-abc="true">pencel art </a>
                                                <p className="text-muted small">SIZE: 25*35 <br/> Artist: Haitham gomaa</p>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    
                                    <td>
                                        <div className="price-wrap"> <var className="price">£E 10.00</var> </div>
                                    </td>
                                    <td className="text-right d-none d-md-block"> <a href="/" className="btn btn-light" data-abc="true"> <i className="bi bi-trash3-fill"></i></a> </td>
                                </tr>
                                <tr>
                                    <td>
                                        <figure className="itemside align-items-center">
                                            <div className="aside"><img src="/1.jpg" alt="ff" className="img-sm"/></div>
                                            <figcaption className="info"> <a href="/" className="title text-dark" data-abc="true">pencel art </a>
                                                <p className="text-muted small">SIZE: 25*35 <br/> Artist: Haitham gomaa</p>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    
                                    <td>
                                        <div className="price-wrap"> <var className="price">£E 10.00</var> </div>
                                    </td>
                                    <td className="text-right d-none d-md-block"> <a href="/" className="btn btn-light" data-abc="true"> <i className="bi bi-trash3-fill"></i></a> </td>
                                </tr>
                                <tr>
                                    <td>
                                        <figure className="itemside align-items-center">
                                            <div className="aside"><img src="/1.jpg" alt='' className="img-sm"/></div>
                                            <figcaption className="info"> <a href="/" className="title text-dark" data-abc="true">pencel art </a>
                                                <p className="text-muted small">SIZE: 25*35 <br/> Artist: Haitham gomaa</p>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    
                                    <td>
                                        <div className="price-wrap"> <var className="price">£E 10.00</var> </div>
                                    </td>
                                    <td className="text-right d-none d-md-block"> <a href="/" className="btn btn-light" data-abc="true"> <i className="bi bi-trash3-fill"></i></a> </td>
                                </tr>
                                <tr>
                                    <td>
                                        <figure className="itemside align-items-center">
                                            <div className="aside"><img src="/1.jpg"  alt='' className="img-sm"/></div>
                                            <figcaption className="info"> <a href="/" className="title text-dark" data-abc="true">pencel art </a>
                                                <p className="text-muted small">SIZE: 25*35 <br/> Artist: Haitham gomaa</p>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    
                                    <td>
                                        <div className="price-wrap"> <var className="price">£E 10.00</var> </div>
                                    </td>
                                    <td className="text-right d-none d-md-block"> <a href="/" className="btn btn-light" data-abc="true"> <i className="bi bi-trash3-fill"></i></a> </td>
                                </tr>
                                <tr>
                                    <td>
                                        <figure className="itemside align-items-center">
                                            <div className="aside"><img src="/1.jpg" alt='' className="img-sm"/></div>
                                            <figcaption className="info"> <a href="/" className="title text-dark" data-abc="true">pencel art </a>
                                                <p className="text-muted small">SIZE: 25*35 <br/> Artist: Haitham gomaa</p>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    
                                    <td>
                                        <div className="price-wrap"> <var className="price">£E 10.00</var> </div>
                                    </td>
                                    <td className="text-right d-none d-md-block"> <a href="/" className="btn btn-light" data-abc="true"> <i className="bi bi-trash3-fill"></i></a> </td>
                                </tr>
                                <tr>
                                    <td>
                                    <figure className="itemside align-items-center">
                                            <div className="aside"><img src="/1.jpg" alt='' className="img-sm"/></div>
                                            <figcaption className="info"> <a href="/" className="title text-dark" data-abc="true">pencel art </a>
                                                <p className="text-muted small">SIZE: 25*35 <br/> Artist: Haitham gomaa</p>
                                            </figcaption>
                                        </figure>
                                    </td>
                               
                                    <td>
                                        <div className="price-wrap"> <var className="price">£E 15</var>  </div>
                                    </td>
                                    <td className="text-right d-none d-md-block"> <a href="/" className="btn btn-light" data-abc="true"> <i className="bi bi-trash3-fill"></i></a> </td>
                                </tr>
                                <tr>
                                    <td>
                                    <figure className="itemside align-items-center">
                                            <div className="aside"><img src="/1.jpg" alt="s" className="img-sm"/></div>
                                            <figcaption className="info"> <a href="/" className="title text-dark" data-abc="true">pencel art </a>
                                                <p className="text-muted small">SIZE: 25*35 <br/> Artist: Haitham gomaa</p>
                                            </figcaption>
                                        </figure>
                                    </td>
                               
                                    <td>
                                        <div className="price-wrap"> <var className="price">£E 9</var>  </div>
                                    </td>
                                    <td className="text-right d-none d-md-block"> <a href="/" className="btn btn-light" data-abc="true"> <i className="bi bi-trash3-fill"></i></a> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </aside>
            <aside className="col-lg-3">
       
                <div className="totalcard">
                    <div className="card-body">
                        <dl className="dlist-align">
                            <dt>Total price:</dt>
                            <dd className="text-right ml-3">£E 69.97</dd>
                        </dl>
                        <dl className="dlist-align">
                            <dt>Discount:</dt>
                            <dd className="text-right text-danger ml-3">- £E 10.00</dd>
                        </dl>
                        <dl className="dlist-align">
                            <dt>Total:</dt>
                            <dd className="text-right text-dark b ml-3"><strong>£E 59.97</strong></dd>
                        </dl>
                        <hr/> 
                        <Link to="PaymentMethod" className="btn btn-out btn-primary btn-square btn-main" data-abc="true"> continue to pay</Link> 
                        <a href="/" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a>
                    </div>
                </div>
            </aside>
        </div>
    </div>


</React.Fragment>



)


}

}


export default ShoppingCart;