import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Video = () => {

    const {it,id} = useParams();
    console.log(it)
    console.log(id)
    const course = useSelector(state => state.courses.filter(course => course._id === id))[0];
    console.log(course)
    return (
        <>
            <div className="ratio ratio-16x9">
                <iframe src={course?.links&&course?.links[it]} title="YouTube video" allowfullscreen></iframe>
            </div>
        </>
    )
}
