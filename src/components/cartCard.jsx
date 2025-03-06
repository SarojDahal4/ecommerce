import { RiDeleteBin5Line } from "react-icons/ri";
import "./components.css";
import { useState, useEffect } from "react";

function CartCard({ items, handleRemoveFromCart, handleUpdateQuantity }) {
  const [quantity, setQuantity] = useState(items.quantity);

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    handleUpdateQuantity(items.product_id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      handleUpdateQuantity(items.product_id, newQuantity);
    }
  };

  return (
    <>
      <div className="container">
        <div className="mainContainer">
          <div className="subContainer">
            <img src={items.imagepath} alt={items.product_name} />
            <div className="subSubContainer">
              <h3 className="productName">{items.product_name}</h3>
              <div className="mainProductQuantity">
                <div className="productQuantity">
                  <button onClick={handleDecrement}>-</button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    readOnly
                  />
                  <button onClick={handleIncreaseQuantity}>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="totalPrice">
            <div className="productPrice">${items.price * quantity}</div>
            <div className="dltLogo">
              <RiDeleteBin5Line onClick={() => handleRemoveFromCart(items)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCard;
