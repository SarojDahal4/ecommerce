import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import PrivateRoute from "./components/privateRoute";
import Seconfooter from "./components/seconfooter";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      // Check if the product is already in the cart
      const existingProductIndex = prev.findIndex(
        (item) => item.product_id === product.product_id
      );

      if (existingProductIndex !== -1) {
        // If product exists, increase quantity
        const updatedCart = [...prev];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
  const handleUpdateQuantity = (productId, newQuantity) => {
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.product_id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  useEffect(() => {
    if (cart.length > 0) {
      const updatedCart = localStorage.setItem("cart", JSON.stringify(cart));
    }
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);
  const handleRemoveFromCart = (items) => {
    setCart((prev) => {
      const updatedCart = prev.filter(
        (item) => item.product_id !== items.product_id
      );
      return updatedCart;
    });
  };
  return (
    <>
      <Router>
        <Navbar cart={cart}></Navbar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/product"
            element={<Product handleAddToCart={handleAddToCart} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart
                  cart={cart}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleUpdateQuantity={handleUpdateQuantity}
                />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Seconfooter />
      </Router>
    </>
  );
}

export default App;
