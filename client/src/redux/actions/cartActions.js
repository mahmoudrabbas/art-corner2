import * as api from '../../api'
import { ADD_PRODUCT, GET_ALL_PRODUCTS, DELETE_PRODUCT, DELETE_ALL_PRODUCTS } from './types';


export const getAllProductsAction = (id) => async (dispatch) => {
    try {
        const {data} = await api.getAllProducts(id);
        dispatch( {type:GET_ALL_PRODUCTS, payload:data} )
    } catch (error) {
        console.log(error)
    }
}

export const addProductAction = (product) => async (dispatch) => {
    try {
        const {data} = await api.addProduct(product);
        console.log(data)
        dispatch( {type: ADD_PRODUCT, payload:data} )
    } catch (error) {
        console.log(error)
    }
}

export const deleteProductAction = (id) => async (dispatch) => {
    try {
        await api.deleleProduct(id);
        dispatch( {type:DELETE_PRODUCT, payload:id} )
    } catch (error) {
        console.log(error)
    }
}

export const deleteAllProductsAction = (id) => async (dispatch) => {
    try {
        const {data} = await api.deleleAllProducts(id);
        dispatch( {type:DELETE_ALL_PRODUCTS, payload:data} )
    } catch (error) {
        console.log(error)
    }
}