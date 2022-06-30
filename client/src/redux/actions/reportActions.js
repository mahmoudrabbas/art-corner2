import * as api from '../../api'
import { GET_ALL_REPORTS, GET_REPORT, MAKE_REPORT, DELETE_REPORT } from './types';


export const getReportAction = (id) => async(dispatch) => {
    try {
        const {data} = await api.getReportById(id);
        dispatch({ type:GET_REPORT, payload:data })
    } catch (error) {
        console.log(error)
    }
}


export const getAllReportsAction = () => async(dispatch) => {
    try {
        const {data} = await api.getAllReports();
        dispatch({ type:GET_ALL_REPORTS, payload:data })
    } catch (error) {
        console.log(error)
    }
}


export const makeReportAction = (report) => async(dispatch) => {
    try {
        const {data} = await api.makeReport(report);
        dispatch({ type:MAKE_REPORT, payload:data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteReportAction = (id) => async(dispatch) => {
    try {
        await api.deleteReport(id);
        dispatch({ type:DELETE_REPORT, payload:id })
    } catch (error) {
        console.log(error)
    }
}