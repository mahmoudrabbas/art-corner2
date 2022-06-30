import * as api from '../../api'
import { CREATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from './../actions/types';
import { joinEvent } from './../../api/index';


export const createEventAction = (event) => async(dispatch) => {
    try {
        const {data} = await api.createEvent(event);
        dispatch({ type: CREATE_EVENT, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getAllEventsAction = () => async(dispatch) => {
    try {
        const {data} = await api.getAllEvents();
        dispatch({ type: FETCH_EVENTS, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const joinEventAction = (id) => async(dispatch) => {
    try {
        const {data} = await api.joinEvent(id);
        dispatch({ type: joinEvent, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}


export const deleteEventAction = (id) => async(dispatch) => {
    try {
        await api.deleteEvent(id);
        dispatch({ type: DELETE_EVENT, payload: id })
    } catch (error) {
        console.log(error.message)
    }
}