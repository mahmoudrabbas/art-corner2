import { GET_ALL_MAILS, DELETE_MAIL, MAKE_MAIL } from './../actions/types';


const mailsReducer = ( mails=[], action ) => {
    switch (action.type) {
        case GET_ALL_MAILS:
            case MAKE_MAIL:
            return [...mails, action.payload];
        case DELETE_MAIL:
            return mails.filter(mail => mail._id !== mail.payload)
        default:
            return mails;
    }
}



export default mailsReducer;