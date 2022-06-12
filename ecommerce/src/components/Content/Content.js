import React from "react";
import ShoeCard from "./ShoeCard";
import { connect } from "react-redux";
import "./content.css";

const Content = ({ products }) => {
  return (
    <div id="background-image-container">
      <div id="background-image-overlay">
        <div className="ui cards" id="test">
          {products.map((product) => (
            <ShoeCard key={product.id} productData={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};
export default connect(mapStateToProps)(Content);
