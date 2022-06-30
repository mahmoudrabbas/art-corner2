import * as api from '../../api'
import { CREATE_DRAWING, FETCH_DRAWINGS, DELETE_DRAWING, UPDATE_DRAWING, FILTER_DRAWING } from './types';

export const getAllDrawingsAction = () => async (dispatch) => {
    try {
        const {data} = await api.getAllDrawings();
        dispatch({ type: FETCH_DRAWINGS, payload:data })
    } catch (error) {
        console.log(error)
    }
}


export const createDrawingAction = (drawing) => async (dispatch) => {
    try {
        const {data} = await api.addDrawing(drawing);
        dispatch({ type: CREATE_DRAWING, payload:data })
    } catch (error) {
        console.log(error)
    }
}


export const updateDrawingAction = (id,drawing) => async (dispatch) => {
    try {
        const {data} = await api.updateDrawing(id,drawing);
        dispatch({ type: UPDATE_DRAWING, payload:data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteDrawingAction = (id) => async (dispatch) => {
    try {
        await api.deleteDrawing(id);
        dispatch({ type: DELETE_DRAWING, payload:id })
    } catch (error) {
        console.log(error)
    }
}

export const filterDrawingsByGategory = (category) => async (dispatch) => {
    try {
        console.log(category)
        dispatch({ type: FILTER_DRAWING, payload: category })
    } catch (error) {
        console.log(error)
    }
}