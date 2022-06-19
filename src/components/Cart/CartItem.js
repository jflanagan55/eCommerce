import React, {useState} from 'react'

import {connect} from 'react-redux'
import { removeFromCart, adjustQty } from '../../redux/Shopping/ShoppingActions'

const CartItem = ({itemData, removeFromCart, adjustQty}) =>{
    const [input, setInput] = useState(itemData.qty)
    const onChangeHandler = (e) =>{
        setInput(e.target.value)
        adjustQty(itemData.id, e.target.value)
    }
    
    const inc  = () =>{
        let x =document.querySelector('#qty')
        let val = parseInt(x.value)
        setInput(val + 1);
        adjustQty(itemData.id, input)
    }
   
    return (
        <div className='ui segment' id='cart-item'>
            <div id='left-side'>
                <img
                className='ui small image' 
                src={itemData.image}
                id='cart-image'  
                />
                <div id='name-and-price'>
                    <h3>{itemData.name}</h3>
                    <p>$ {itemData.price}</p>
                </div>
            </div>
            <div id='right-side'>
                <div className=' ui labeled input' >
                    <label htmlFor='qty' className='ui blue label' id='qty-label'>Quantity</label>
                    <input className="ui input" min="1" max="99" type= "number" id= "qty" name = "qty" value = {input} onChange = {onChangeHandler}/>
                </div>
                
                <button onClick = {()=>removeFromCart(itemData.id)} className= 'negative ui button'>Delete</button>
            
            </div>
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