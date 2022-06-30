import { CREATE_BOOK, FETCH_BOOKS, DELETE_BOOK } from './../actions/types';


const booksReducer = ( books=[], action ) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return action.payload;
        case CREATE_BOOK:
            return [...books, action.payload];
        case DELETE_BOOK:
            return books.filter(book => book._id !== action.payload)
        default:
            return books;
    }
}



export default booksReducer;