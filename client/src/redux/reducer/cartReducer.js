import { GET_ALL_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, DELETE_ALL_PRODUCTS } from './../actions/types';


const cartReducer = ( products=[], action ) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return action.payload;
        case ADD_PRODUCT:
            return [...products, action.payload];
        case DELETE_PRODUCT:
            return products.filter(product => product._id !== action.payload._id)
        case DELETE_ALL_PRODUCTS:
            return []
        default:
            return products;
    }
}



export default cartReducer;