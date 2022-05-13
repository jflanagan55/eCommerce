import * as actionTypes from './ShoppingTypes'

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            name: "Blue Skateboard Shoe",
            price: 49.95,
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 2,
            name: "Pink Trainers",
            price: 59.95,
            image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

        },
        {
            id: 3,
            name: "Leather Loafers",
            price: 89.95,
            image: 'https://images.unsplash.com/photo-1616406432452-07bc5938759d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

        },
        {
            id: 4,
            name: "Hightop Boots",
            price: 64.95,
            image: 'https://images.unsplash.com/photo-1605732440685-d0654d81aa30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHxzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

        },
        {
            id: 5,
            name: "Light Blue Hightops",
            price: 69.95,
            image: 'https://images.unsplash.com/photo-1595461135849-bf08893fdc2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

        },
        {
            id: 6,
            name: "Everyday Shoes",
            price: 59.95,
            image: 'https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHxzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

        },
        {
            id: 7,
            name: "White Basketball Shoes",
            price: 79.95,
            image: 'https://images.unsplash.com/photo-1533680937690-d59ab2543468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk3fHxzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

        },
        {
            id: 8,
            name: "Blue Running Shoe",
            price: 39.95,
            image: 'https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg3fHxzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

        },
        {
            id: 9,
            name: "Knit Running Shoe",
            price: 89.95,
            image: 'https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI5fHxzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

        },
        {
            id: 10,
            name: "Working Boots",
            price: 49.95,
            image: 'https://images.unsplash.com/photo-1554133818-7bb790d55236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjg2fHxzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

        },
        {
            id: 11,
            name: "White Lowtop Shoe",
            price: 59.95,
            image: 'https://images.unsplash.com/photo-1634316427425-722247ebe036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'

        },
        {
            id: 12,
            name: "Hightop Basketball Shoe",
            price: 74.95,
            image: 'https://images.unsplash.com/photo-1602033693387-3531914e7185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },

        
    ], //{id, title, description, price, img}
    cart: [], // {id, title, description, price, img}
}


const shopReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(product => product.id ===action.payload.id)
            const inCart = state.cart.find(item => item.id ===action.payload.id ? true: false)
            return {
                ...state,
                cart: inCart 
                ? state.cart.map(item => 
                    item.id === action.payload.id
                     ?{...item, qty: item.qty +1}
                     : item)
                     : [...state.cart, {...item, qty: 1}]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id 
                    ? {...item, qty: +action.payload.qty} 
                    : item
                )
            }
          
        default:
            return state;
    }
}

export default shopReducer;