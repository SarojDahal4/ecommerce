import React, { useEffect, useState } from "react";
import "./product.css";
import CustomCard from "../components/card";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

const Product = ({ handleAddToCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the page loads
  }, []);
  const [products, setProducts] = useState([]);
  const categories = ["All", "Boy", "Girl", "Kid", "Unisex"];

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4040/product/");
      setProducts(res.data);
    };
    fetchData();
  }, []);

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Handle category filter change
  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  // Filtered items based on the query and category filter
  const filteredData = () => {
    let filteredProducts = products;

    // Apply search query filter
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.product_name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply category filter
    if (categoryFilter !== "All") {
      filteredProducts = filteredProducts.filter(
        ({ category }) => category === categoryFilter
      );
    }

    return filteredProducts;
  };

  // Handle input change for search

  return (
    <>
      <div className="mainCategory">
        <div className="category">
          <h1>Category</h1>
          <div className="Section">
            {categories.map((category, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="category"
                  value={category}
                  onChange={handleCategoryChange}
                  checked={category === categoryFilter}
                />
                {category}
              </label>
            ))}
          </div>
         
        </div>

        <div className="filterPage">
          <div className="search filterArea">
            <input
              type="search"
              placeholder="Search"
              value={query}
              onChange={handleInputChange}
            />
            <button>
              <BsSearch />
            </button>
          </div>

          <div className="filterArea">
            <div className="filterCards">
              <ul>
                {filteredData().map((product) => (
                  <li key={product.product_id}>
                    <div>
                      <CustomCard
                        product={product}
                        handleAddToCart={handleAddToCart}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
