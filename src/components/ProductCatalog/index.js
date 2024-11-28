import React, { useEffect, useState } from "react";

import { fetchProducts } from "../../api";

import "./index.css";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1 className="product-heading">Products Catalog</h1>
      <p className="products-description">
        Browse our fresh vegetables and fruits available for bulk orders.
      </p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {products.map((product) => (
          <li className="product-list" key={product._id}>
            <h3 className="list-heading">{product.name}</h3>
            <p className="list-para">Price: ₹{product.price} per unit</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;
