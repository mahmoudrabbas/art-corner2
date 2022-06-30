import * as api from '../../api'
import { CREATE_COURSE, DELETE_COURSE, ENROLL_COURSE, FETCH_COURSES, UPDATE_COURSE, FETCH_ALL_COURSES_BY_ID } from './types';

export const getAllCoursesAction = () => async (dispatch) => {
    try {
        const {data} = await api.getAllCourses();
        dispatch({ type: FETCH_COURSES, payload: data })
    } catch (error) {
        console.log(error)
    }
}



export const getAllCoursesByIdAction = (id) => async (dispatch) => {
    try {
        const {data} = await api.getAllCoursesById(id);
        dispatch({ type: FETCH_ALL_COURSES_BY_ID, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createCourseAction = (course) => async (dispatch) => {
    try {
        const {data} = await api.createCourse(course);
        dispatch({ type: CREATE_COURSE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const enrollOnCourseAction = (id) => async (dispatch) => {
    try {
        const {data} = await api.enrollOnCourse(id);
        dispatch({ type: ENROLL_COURSE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateCourseAction = (id, updatedCourse) => async (dispatch) => {
    try {
        const {data} = await api.updateCourse(id,updatedCourse);
        console.log(data)
        dispatch({ type: UPDATE_COURSE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteCourseAction = (id) => async (dispatch) => {
    try {
        const {data} = await api.deleteCourse(id);
        console.log(data)
        dispatch({ type: DELETE_COURSE, payload: data })
    } catch (error) {
        console.log(error)
    }
}