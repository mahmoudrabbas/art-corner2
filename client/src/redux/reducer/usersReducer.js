// import { GET_USER } from "../actions/types";
import { GET_ALL_USERS } from './../actions/types';




const usersReducer = (users = [], action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return [...users, action.payload]
        default:
            return users;
    }
}


export default usersReducer;