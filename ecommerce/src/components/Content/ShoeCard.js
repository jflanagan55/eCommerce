import React from 'react'

const ShoeCard = (props) =>{
    return(
        <div className='ui card'>
            <h2>{props.name}</h2>
            <img src={props.picLink} />
            <h3>{props.price}</h3>
            <button className='ui button'>Add to Cart</button>
        </div>
    )
}

export default ShoeCard;