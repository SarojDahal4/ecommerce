import React, { useState } from "react";
import "./components.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
function Navbar({ cart }) {
  const [menu, setMenu] = useState(false);

  const handleToggle = () => {
    setMenu((prev) => !prev);
    console.log(menu);
  };
  return (
    <>
      <div className="wholeNavbar">
        <nav className="navbar">
          <div className="nav-logo">
            <h1>Sarose</h1>
          </div>
          <div>
            <ul className={`nav-items ${menu ? "open" : ""}`}>
              <NavLink
                className="nav-item"
                to="/"
                onClick={() => setMenu(false)}
              >
                Home
              </NavLink>
              <NavLink
                className="nav-item"
                to="/contact"
                onClick={() => setMenu(false)}
              >
                Contact
              </NavLink>
              <NavLink
                className="nav-item"
                to="/product"
                onClick={() => setMenu(false)}
              >
                Store
              </NavLink>
              <button className="logButton">
                Login <FiLogIn />
              </button>

              <div className="navBottom">
                <div className="mediaLink">
                  <FaFacebook />
                  <FaInstagram />
                </div>

                <p> © 2025 Sarose | All right reserved</p>
              </div>
            </ul>
          </div>

          <div className="auth">
            <NavLink className="cart-logo" to="/cart">
              <FaShoppingCart onClick={() => setMenu(false)} className="k" />
              <div>{cart.length}</div>
            </NavLink>

            <div className="menuMain">
              {menu ? (
                <RiCloseLargeLine
                  onClick={handleToggle}
                  className="menuNavbar"
                />
              ) : (
                <CiMenuBurger onClick={handleToggle} className="menuNavbar" />
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
