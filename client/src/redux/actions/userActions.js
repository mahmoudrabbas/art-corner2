import * as api from '../../api'
import { GET_USER, GET_ALL_USERS } from './types';


export const getUser = (id) => async(dispatch) => {
    try {
        const {data} = await api.getUserById(id);
        dispatch({ type:GET_USER, payload:data })
    } catch (error) {
        console.log(error)
    }
}

export const getAllUsers = () => async(dispatch) => {
    try {
        const {data} = await api.getAllUsers();
        dispatch({ type:GET_ALL_USERS, payload:data })
    } catch (error) {
        console.log(error)
    }
}