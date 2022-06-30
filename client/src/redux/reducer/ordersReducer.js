
import { CREATE_ORDER, GET_ALL_ORDERS, GET_ORDER, DELETE_ORDER, ACCEPT_ORDER, REJECT_ORDER } from './../actions/types';


const ordersReducer = (orders = [], action) => {
    switch (action.type) {
        case GET_ALL_ORDERS:
            return action.payload;
        case GET_ORDER:
            return orders.filter(order => order._id === action.payload._id)
        case DELETE_ORDER:
            return orders.filter(order => order._id !== action.payload._id)
        case CREATE_ORDER:
            return [...orders, action.payload]
        case ACCEPT_ORDER:
        case REJECT_ORDER:
            return orders.map( order => order._id === action.payload._id ? action.payload : order )
        default:
            return orders;
    }
}


export default ordersReducer;