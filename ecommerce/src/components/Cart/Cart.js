import React,{useState, useEffect} from 'react'
import CartItem from './CartItem'

import {connect} from 'react-redux'

const Cart = ({cart}) =>{
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(()=>{
        let items = 0;
        let price = 0;
        
        cart.forEach(item =>{
            items += item.qty;
            price += item.qty*item.price
        })

        setTotalPrice(price)
        setTotalItems(items)
    },[cart, totalPrice, totalItems, setTotalPrice, setTotalItems])
    return (
    <div>
        <div>
            {cart.map((item) =>(
                <CartItem key = {item.id} itemData = {item}/>
            ))}
        </div>
        <div>
            <h3>Your Cart</h3>
            <div>
                <span>Total: ({totalItems})</span>
                <span>$ {totalPrice}</span>
            </div>
            <button>Checkout</button>
        </div>
    </div>
    )
}
const mapStateToProps = state =>{
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);