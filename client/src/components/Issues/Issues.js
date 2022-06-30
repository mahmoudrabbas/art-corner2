import React from 'react'
import { useSelector } from 'react-redux';

const Issue = () => {

    const issues = useSelector(state => state.mails)[0]
    console.log(issues)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Issue ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Message</th>
                </tr>
            </thead>
            <tbody>
                {issues?.map((issue, i) => (
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{issue?.name}</td>
                        <td>{issue?.email}</td>
                        <td>{issue?.message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Issue
