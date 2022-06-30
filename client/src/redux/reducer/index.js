import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import courseReducer from "./coursesReducer";
import drawingsReducer from './drawingsReducer';
import eventsReducers from "./eventsReducer";
import usersReducer from './usersReducer';
import cartReducer from './cartReducer';
import reportsReducer from './reportsReducers';
import ordersReducer from './ordersReducer';
import mailsReducer from './mailsReducer';

export default combineReducers({
    drawings: drawingsReducer,
    events: eventsReducers,
    books: booksReducer,
    courses: courseReducer,
    users: usersReducer,
    products: cartReducer,
    reports: reportsReducer,
    orders: ordersReducer,
    mails: mailsReducer
})