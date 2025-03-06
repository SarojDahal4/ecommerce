import "./pages.css";

import img2 from "../assets/image/img2.jpg";

import { Bs0Circle } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../components/banner";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:4040/product/");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);
  const sortedProduct = products.sort((a, b) => b.total_sold - a.total_sold);
  const topProduct = sortedProduct.slice(0, 4);
  return (
    <>
      <main className="hero">
        <div className="leftHero">
          <h1>New,</h1>
          <h1>Amazing</h1>
          <h1>Stuff Is Here</h1>
          <h3>Shop Today, get 20% off</h3>
          <button>
            Shop Now <Bs0Circle />
          </button>
        </div>
      </main>
      <div className="homeContainer">
        <h3>Best Selling</h3>
        <div className="topTrending">
          {topProduct.map((product, index) => (
            <div className="trendSection" key={index}>
              <div>{product.product_name} </div>
              <img src={product.imagepath} />
              <div>${product.price}</div>
              <button>Shop More</button>
            </div>
          ))}
        </div>
      </div>
      <div className="banner">
        <Banner />
      </div>
      <div className="about">
        <div className="leftAbout">
          <h5>WHY US!!!!</h5>

          <button>Shop Now</button>
        </div>
        <div className="rightAbout">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam,
            necessitatibus laborum perferendis provident odit quae. Cupiditate,
          </p>
        </div>
      </div>
      <div className="subscribeSection">
        <div className="subscribeText">
          <h3>
            Sign-up Today For 20% off*, first to exclusive offers and more!
          </h3>
        </div>
        <div className="subscribeForm">
          <input placeholder="Enter your Email " />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="sportDeal">
        <h2>Sale Sale Sale...</h2>
        <h4>Special Offer on sports wear...</h4>
        <h2>Shop Now!!</h2>
      </div>
      <div className="delivery">
        <h2>🚀 Fast & Reliable Delivery</h2>
        <p>We deliver fresh, fast, and right to your doorstep! 📦</p>
        <button>
          Deliver Now <FaArrowRight />{" "}
        </button>
      </div>
    </>
  );
};

export default Home;
