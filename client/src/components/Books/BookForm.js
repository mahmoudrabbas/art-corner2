import React, { useState } from 'react'
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { createBookAction } from '../../redux/actions/bookActions';

const BookForm = () => {

    const dispatch = useDispatch();
    // const navigate =  useNavigate();


    const [bookData, setBookData] = useState({
        title:"",
        author:"",
        description:"",
        cover:"",
        year:"",
        book:""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createBookAction(bookData))
    }

    return (
        <>
            <div className="text-center1">
                <main className="form-signin">
                    <form onSubmit={handleSubmit}>
                        <h4>Add Book</h4><br />



                        
                        <div className="form-floating">
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Upload book</label>
                                <div className='input-file'>
                                    <FileBase64 multiple={false} onDone={({base64}) => setBookData({...bookData,book:base64}) } className="form-control" type="file" id="formFile" />
                                </div>
                            </div>
                        </div>

                        <div className="form-floating">
                            <input
                                required
                                type="text" 
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setBookData({...bookData,title:e.target.value})} />
                            <label htmlFor="floatingInput">Title</label>
                        </div>
            
                        <div className="form-floating">
                            <input
                                required
                                type="text" 
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setBookData({...bookData,author:e.target.value})} />
                            <label htmlFor="floatingInput">Author</label>
                        </div>

                        <div className="form-floating">
                            <input
                                required
                                type="text" 
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setBookData({...bookData,description:e.target.value})} />
                            <label htmlFor="floatingInput">Description</label>
                        </div>

                        <div className="form-floating">
                            <input
                                required
                                type="number"
                                className="form-control" 
                                id="floatingInput" 
                                onChange={(e) => setBookData({...bookData,year:e.target.value})} />
                            <label htmlFor="floatingInput">Publication Year</label>
                        </div>


                        <div className="form-floating">
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Cover</label>
                                <div className='input-file'>
                                    <FileBase64 multiple={false} onDone={({base64}) => setBookData({...bookData,cover:base64}) } className="form-control" type="file" id="formFile" />
                                </div>
                            </div>
                        </div>


                        <button className="w-100 mt-2 btn btn-lg btn-primary" type="submit">Upload</button>

                    </form>
                </main>
            </div>
        </>
    )
}

export default BookForm