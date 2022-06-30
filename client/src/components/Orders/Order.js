import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { acceptOrderAction, rejectOrderAction } from './../../redux/actions/orderActions';

const Order = ({ order }) => {

    const dispatch = useDispatch();

    return (
        <>
            <tr>
                <td><Link to={`/user/${order?.clientId}`}>See profile</Link></td>
                <td>{order?.message}</td>
                <td>{order?.price}</td>
                <td><a href={`${order?.picture}`} download>download</a></td>
                <td><img src={order?.picture} alt='' width={'150'} height={'150'}/></td>
                <td>
                    <button className='btn btn-success' onClick={() => dispatch(acceptOrderAction(order?._id))}>Accept</button>
                    <button className='btn btn-danger m-1' onClick={() => dispatch(rejectOrderAction(order?._id))}>Reject</button>
                </td>
            </tr>
        </>
    )
}

export default Order