import React from 'react'

const ShoeCard = ({productData}) =>{
    return(
        <div className='four wide column'>
            <div className='ui card'>
                <h2>{productData.name}</h2>
                <img src={productData.image} width= "200px" />
                <h3>{productData.price}</h3>
                <button className='ui teal button'>Add to Cart</button>
            </div>
        </div>
    ) 
}

export default ShoeCard;