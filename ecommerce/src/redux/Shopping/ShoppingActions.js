import * as actionTypes from './ShoppingTypes'
export const addToCart = (itemId) =>{
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}
export const removeFromCart = (itemId) =>{
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}
export const adjustQty = (itemId, value) =>{
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}
