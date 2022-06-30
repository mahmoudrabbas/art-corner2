import { CREATE_EVENT } from "../actions/types";
import { FETCH_EVENTS, DELETE_EVENT, JOIN_EVENT } from './../actions/types';

const eventsReducers = (events=[], action) => {
    switch (action.type) {
        case CREATE_EVENT:
            return [...events, action.payload];
        case FETCH_EVENTS:
            return action.payload;
        case DELETE_EVENT:
            return events.filter((event) => event._id!==action.payload);
        case JOIN_EVENT:
            return events.map( event => event._id === action.payload._id ? action.payload : event )
        default:
            return events;
    }
}

export default eventsReducers;