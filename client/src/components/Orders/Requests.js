import React from 'react'
import { useSelector } from 'react-redux';
import Request from './Request';

const Requests = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const requests = useSelector(state => state?.orders?.filter(request => request?.clientId === user?._id));

    console.log(requests)
    
    return (
        <>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="border-right">
                        <div className="p-3 py-5">
                            <div className="align-items-center mb-3">
                                <h4 className="text-right">Requests</h4>
                                <hr />

                                <table className="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">Artist</th>
                                        <th scope="col">Status</th>
                                        <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {!(requests?.length)?(
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        ):(
                                            requests?.map(request => (
                                                <Request key={request?._id} request={request} />
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

export default Requests