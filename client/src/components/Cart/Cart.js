import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './ShoppingCart.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteProductAction,deleteAllProductsAction } from './../../redux/actions/cartActions';


const Cart = ({setCartProducts, setPrice}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        setCartProducts(products?.length&&products?.length);
        setPrice(products?.length? (products?.map(product => product?.price).reduce((i,n) => i+n)):0);

    },[products])


    return (
        <>
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
                                        {products?.length? (
                                            products?.map(product => (
                                                <tr key={product?._id}>
                                                    <td>
                                                        <figure className="itemside align-items-center">
                                                            <span className="aside"><img src={product?.drawing} style={{objectFit:"cover"}} alt="ff" className="img-sm rounded"/></span>
                                                            <figcaption className="info text-capitalize"> 
                                                                <p className="title text-danger" data-abc="true">{product?.title}</p>
                                                                <p className="title text-dark" data-abc="true">{product?.category}</p>
                                                                <p className="text-primary small">SIZE: {product?.size} <br/> Artist: {product?.artist}</p>
                                                            </figcaption>
                                                        </figure>
                                                    </td>
                                                    
                                                    <td>
                                                        <span className="price-wrap"> <var className="price">{product?.price? product?.price: "Free"}</var> </span>
                                                    </td>
                                                    <td className="text-right d-none d-md-block"><i onClick={() => dispatch(deleteProductAction(product?._id))} className="fa-solid fa-trash btn"></i></td>
                                                </tr>
                                            ))
                                        ):"There is no items."}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </aside>

                    <aside className="col-lg-3">
                        <div className="totalcard">
                            <div className="card-body">
                                <dl className="dlist-align" style={{color:"white"}}>
                                    <dt>Total price:</dt>
                                    <dd className="text-right ml-3"> &nbsp; {products?.length? (
                                        products.map(product => product?.price).reduce((c,n) => c+n)
                                    ):0}</dd>
                                </dl>
                                <hr/> 
                                <Link to="/payment" className="btn btn-primary btn-square btn-main" data-abc="true">Payment</Link> 
                                <Link to={`/cart/${user?._id}`} className="btn btn-danger btn-main mt-2" data-abc="true" onClick={() => dispatch(deleteAllProductsAction(user?._id))}>Cancel</Link>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </>
    )
}

export default Cart