import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Reading = () => {

    const {id} = useParams();
    const book = useSelector(state => state.books.filter(book => book._id === id))[0]
    console.log(book)
    return (
        <>
            <div className='container-fluid m-0 p-0'>
                <div className="ratio ratio-16x9">
                    <iframe src={book?.book} title="book" width={"100%"} height={"600"} >ss</iframe>
                </div>
            </div>
        </>
    )
}

export default Reading