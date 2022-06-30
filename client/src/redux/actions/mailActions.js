import * as api from '../../api'
import { GET_ALL_MAILS, GET_MAIL, DELETE_MAIL, MAKE_MAIL } from './types';


export const getAllMailsAction = () => async (dispatch) => {
    try {
        const {data} = await api.getAllMail();
    
        dispatch( {type:GET_ALL_MAILS, payload:data} )
    } catch (error) {
        console.log(error)
    }
}

export const getMailAction = (id) => async (dispatch) => {
    try {
        const {data} = await api.getMailById(id);
    
        dispatch( {type:GET_MAIL, payload:data} )
    } catch (error) {
        console.log(error)
    }
}

export const makeMailAtion = (mail) => async (dispatch) => {
    console.log(mail)
    try {
        const {data} = await api.makeMail(mail);
        dispatch({ type:MAKE_MAIL, payload:data } )
    } catch (error) {
        console.log(error)
    }
}

export const deleteMailAction = (id) => async (dispatch) => {
    try {
        await api.deleteMail(id);
        dispatch( {type:DELETE_MAIL, payload:id} )
    } catch (error) {
        console.log(error)
    }
}