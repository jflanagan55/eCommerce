import React, {useState} from 'react'

import {connect} from 'react-redux'
import { removeFromCart, adjustQty } from '../../redux/Shopping/ShoppingActions'

const CartItem = ({itemData, removeFromCart, adjustQty}) =>{
    const [input, setInput] = useState(itemData.qty)
    const onChangeHandler = (e) =>{
        setInput(e.target.value)
        adjustQty(itemData.id, e.target.value)
    }
    
   
    return (
        <div className='ui card'>
            <img 
              src={itemData.image}  
            />
            <div>
                <h3>{itemData.name}</h3>
                <p>$ {itemData.price}</p>
            </div>
            <div className='qtyInfo'>
                <label htmlFor='qty'>Quantity</label>
                <input className='ui input' min="1" type= "number" id= "qty" name = "qty" value = {input} onChange = {onChangeHandler}/>
                
            </div>
            <button onClick = {()=>removeFromCart(itemData.id)} className= 'negative ui button'>Delete</button>
        </div>
    )
}
const mapDispatchToProps = dispatch =>{
    return{
        removeFromCart: (id)=> dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id,value))
    }
}
export default connect(null, mapDispatchToProps)(CartItem);