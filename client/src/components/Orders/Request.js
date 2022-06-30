import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteOrderAction } from '../../redux/actions/orderActions';

const Request = ({ request }) => {

    const dispatch = useDispatch();

    return (
        <>
            <tr>
                <td><Link to={`/user/${request?.artistId}`}>See profile</Link></td>
                <td>{request?.processing}</td>
                <td>
                    <button className='btn btn-danger m-1' onClick={() => dispatch(deleteOrderAction(request?._id))}>cancel</button>
                </td>
            </tr>
        </>
    )
}

export default Request