
import { GET_ALL_REPORTS, MAKE_REPORT, DELETE_REPORT, GET_REPORT } from './../actions/types';

const reportsReducer = (reports = [], action) => {
    switch (action.type) {
        case GET_ALL_REPORTS:
        case MAKE_REPORT:
        case GET_REPORT:
            return [...reports, action.payload];
        case DELETE_REPORT:
            return reports.filter(report => report._id !== action.payload)
        default:
            return reports;
    }
}


export default reportsReducer;