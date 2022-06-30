import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Report = () => {

    const reports = useSelector(state => state.reports)[0]
    console.log(reports)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Report ID</th>
                    <th scope="col">Reporter</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Drawing</th>
                    <th scope="col">Message</th>
                </tr>
            </thead>
            <tbody>
                {reports?.map((report, i) => (
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td><Link to={`/user/${report?.reporterId}`}>See Profile</Link></td>
                        <td><Link to={`/user/${report?.artistId}`}>See Profile</Link></td>
                        <td><Link to={`/drawings/drawing/${report?.drawingId}`}>See Drawing</Link></td>
                        <td>{report.reason}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


export default Report