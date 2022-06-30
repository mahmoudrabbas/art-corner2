import { CREATE_COURSE, ENROLL_COURSE } from "../actions/types";
import { FETCH_COURSES, DELETE_COURSE, UPDATE_COURSE, FETCH_ALL_COURSES_BY_ID } from './../actions/types';

const courseReducer = (courses =[], action) => {
    switch (action.type) { 
        case FETCH_COURSES:
        case FETCH_ALL_COURSES_BY_ID:
            return action.payload;
        case CREATE_COURSE:
            return [...courses, action.payload];
        case DELETE_COURSE:
            return courses.filter(course => course._id !== action.payload._id)
        case UPDATE_COURSE:
        case ENROLL_COURSE:
            return courses.map( course => course._id === action.payload._id ? action.payload : course )
        default:
            return courses;
    }
}

export default courseReducer;