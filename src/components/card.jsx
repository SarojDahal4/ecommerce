import React from "react";
import "./components.css";

function CustomCard({ product, handleAddToCart }) {
  return (
    <>
      <div className="cardContainer">
        <div className="card">
          <img src={product.imagepath} />
          <h4>{product.product_name}</h4>
          <h6>{product.description}</h6>
          <h6>${product.price}</h6>
          
          <button className="mb-2">Buy Now</button>
          <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default CustomCard;
