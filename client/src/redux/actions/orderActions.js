import * as api from '../../api'
import { CREATE_ORDER, DELETE_ORDER, GET_ALL_ORDERS, GET_ORDER, ACCEPT_ORDER, REJECT_ORDER } from './types';
export const createOrderAction = (order) => async(dispatch) => {
    try {
        console.log(order)
        const {data} = await api.createOrder(order);
        dispatch({ type: CREATE_ORDER, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getOrderAction = (id) => async(dispatch) => {
    try {
        const {data} = await api.getOrder(id);
        dispatch({ type: GET_ORDER, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const acceptOrderAction = (id) => async(dispatch) => {
    try {
        const {data} = await api.acceptOrder(id);
        dispatch({ type: ACCEPT_ORDER, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}


export const rejectOrderAction = (id) => async(dispatch) => {
    try {
        const {data} = await api.rejectOrder(id);
        dispatch({ type: REJECT_ORDER, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getAllOrdersAction = () => async(dispatch) => {
    try {
        const {data} = await api.getAllOrders();
        dispatch({ type: GET_ALL_ORDERS, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}


export const deleteOrderAction = (id) => async(dispatch) => {
    try {
        await api.deleteOrder(id);
        dispatch({ type: DELETE_ORDER, payload: id })
    } catch (error) {
        console.log(error.message)
    }
}