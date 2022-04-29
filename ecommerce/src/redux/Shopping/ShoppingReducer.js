import * as actionTypes from './ShoppingTypes'

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            name: "Blue Skateboard Shoe",
            price: "$49.99",
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 2,
            name: "Blue Skateboard Shoe",
            price: "$49.99",
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 3,
            name: "Blue Skateboard Shoe",
            price: "$49.99",
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 4,
            name: "Blue Skateboard Shoe",
            price: "$49.99",
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 5,
            name: "Blue Skateboard Shoe",
            price: "$49.99",
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 6,
            name: "Blue Skateboard Shoe",
            price: "$49.99",
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 7,
            name: "Blue Skateboard Shoe",
            price: "$49.99",
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 8,
            name: "Blue Skateboard Shoe",
            price: "$49.99",
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 9,
            name: "Blue Skateboard Shoe",
            price: "$49.99",
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 10,
            name: "Blue Skateboard Shoe",
            price: "$49.99",
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 11,
            name: "Blue Skateboard Shoe",
            price: "$49.99",
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 12,
            name: "Blue Skateboard Shoe",
            price: "$49.99",
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },

        
    ], //{id, title, description, price, img}
    cart: [], // {id, title, description, price, img}
    currentItem: null
}


const shopReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
            return {}   
        default:
            return state;
    }
}

export default shopReducer;