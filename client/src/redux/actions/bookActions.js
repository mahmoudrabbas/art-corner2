import * as api from '../../api'
import { CREATE_BOOK, FETCH_BOOKS, DELETE_BOOK } from './types';


export const getAllBooksAction = () => async (dispatch) => {
    try {
        const {data} = await api.getAllBooks();
    
        dispatch( {type:FETCH_BOOKS, payload:data} )
    } catch (error) {
        console.log(error)
    }
}

export const createBookAction = (book) => async (dispatch) => {
    try {
        const {data} = await api.createBook(book);
        dispatch( {type:CREATE_BOOK, payload:data} )
    } catch (error) {
        console.log(error)
    }
}

export const deleteBookAction = (id) => async (dispatch) => {
    try {
        await api.deleteBook(id);
        dispatch( {type:DELETE_BOOK, payload:id} )
    } catch (error) {
        console.log(error)
    }
}