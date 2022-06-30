import React from 'react'
import Order from './Order'
import { useSelector } from 'react-redux';

const Orders = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const orders = useSelector(state => state?.orders?.filter(order => order?.artistId === user?._id));

    console.log(orders)
    
    return (
        <>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="border-right">
                        <div className="p-3 py-5">
                            <div className="align-items-center mb-3">
                                <h4 className="text-right">Orders</h4>
                                <hr />

                                <table className="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">Client</th>
                                        <th scope="col">Message</th>
                                        <th scope="col">Price(LE)</th>
                                        <th scope="col">Download</th>
                                        <th scope="col">Picture</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {!(orders?.length)?(
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        ):(
                                            orders?.map(order => (
                                                <Order key={order?._id} order={order} />
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders