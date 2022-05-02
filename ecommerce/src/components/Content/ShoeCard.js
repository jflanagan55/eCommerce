import React from 'react'
import { connect } from 'react-redux'
import {addToCart} from '../../redux/Shopping/ShoppingActions'
const ShoeCard = ({productData, addToCart}) =>{
    return(
      
            <div className='ui card'>
                <h2>{productData.name}</h2>
                <img src={productData.image} className="productPic"/>
                <h3>${productData.price}</h3>
                <button className='ui teal button' onClick= {()=> addToCart(productData.id)}>Add to Cart</button>
            </div>
        
    ) 
}
const mapDispatchToProps = dispatch =>{
    return{
        addToCart : (id) => dispatch(addToCart(id))
    }
}
export default connect (null, mapDispatchToProps)(ShoeCard);