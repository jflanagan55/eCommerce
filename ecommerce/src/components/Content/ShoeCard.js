import React from 'react'
import { connect } from 'react-redux'
import {addToCart} from '../../redux/Shopping/ShoppingActions'
const ShoeCard = ({productData, addToCart}) =>{
    return(
      
            <div className='ui card'>
                <h2 style={{paddingTop: '1rem'}}>{productData.name}</h2>
                <div className='ui image'>
                    <img src={productData.image} className="product-pic"  style={{height:"200px"}}/>
                </div>
                <div className='content'>
                    <h3>${productData.price}</h3>
                </div>
                <button style={{fontSize: '1.4rem'}}className='ui teal button' onClick= {()=> addToCart(productData.id)}>Add to Cart</button>
            </div>
        
    ) 
}
const mapDispatchToProps = dispatch =>{
    return{
        addToCart : (id) => dispatch(addToCart(id))
    }
}
export default connect (null, mapDispatchToProps)(ShoeCard);