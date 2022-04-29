import React from "react";
import ShoeCard from "./ShoeCard";
import { connect } from 'react-redux'


const Content = ( {products} ) =>{
    return(
    <div className="ui grid container">
        {products.map((product)=>(
            <ShoeCard key = {product.id} productData = {product}  />
        ))}
      </div>
    )
}
const mapStateToProps = state =>{
  return{
    products: state.shop.products
}
}
export default connect(mapStateToProps)(Content)