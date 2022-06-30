
import { CREATE_DRAWING, FETCH_DRAWINGS, DELETE_DRAWING, UPDATE_DRAWING, FILTER_DRAWING } from './../actions/types';


const drawingsReducer = (drawings = [], action) => {
    switch (action.type) {
        case FETCH_DRAWINGS:
            return action.payload;
        case CREATE_DRAWING:
            return [action.payload, ...drawings];
        case UPDATE_DRAWING:
            return drawings.map(drawing => drawing._id === action.payload._id? action.payload : drawing);
        case DELETE_DRAWING:
            return drawings.filter(drawing => drawing._id !== action.payload);
        case FILTER_DRAWING:
            return drawings.filter(drawing => drawing.category === action.payload)
        default:
            return drawings
    }
}


export default drawingsReducer;