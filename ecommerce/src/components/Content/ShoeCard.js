import React from 'react'

const ShoeCard = (props) =>{
    return(
        <div className='ui card four wide column'>
            <h2>{props.name}</h2>
            <img src={props.picLink} width= "200px" />
            <h3>{props.price}</h3>
            <button className='ui teal button'>Add to Cart</button>
        </div>
    )
}

export default ShoeCard;