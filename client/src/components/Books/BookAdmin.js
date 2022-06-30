import Book from './Book';
import BookForm from './BookForm';
import { useSelector } from 'react-redux';

const BookAdmin = () => {

    const books = useSelector((state) => state.books)

    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8 mt-1'>
                    {!books.length?(
                        <div className="spinner-border mt-1" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ):(
                        books.map(book => (
                            <Book book={book} key={book._id} />
                        ))
                    )}
                </div>
                <div className='col-3 mt-1'>
                    <BookForm />
                </div>
            </div>
        </div>
    )
}

export default BookAdmin