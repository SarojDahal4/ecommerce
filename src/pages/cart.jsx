import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import CartCard from "../components/cartCard";

function Cart({ cart, handleRemoveFromCart, handleUpdateQuantity }) {
  
  const totalCartPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="mainCart">
      <div className="cartText">
        <h5>Items in your Cart...</h5>
        <div>
          {cart.length > 0 ? (
            cart.map((items) => (
              <CartCard
                key={items.product_id}
                items={items}
                handleRemoveFromCart={handleRemoveFromCart}
                handleUpdateQuantity={handleUpdateQuantity}
              />
            ))
          ) : (
            <div> No item </div>
          )}
        </div>
      </div>
      <div className="totalSection">
        <div className="totalItems">Total Price : ${totalCartPrice}</div>
        <div className="deliveryFee">Delivery Fee: $ 25</div>
        <div className="totalCost">Final Cost : {totalCartPrice + 25}</div>
        <div className="moreButton">
          <button className="moreItems">Checkout</button>
          <Link to="/product">
            {" "}
            <button className="moreItems">Add More</button>
          </Link>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default Cart;
