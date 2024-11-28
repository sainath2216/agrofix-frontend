import React, { useState } from "react";
import { placeOrder } from "../../api";

import "./index.css"

const OrderForm = () => {
  const [order, setOrder] = useState({
    product: "",
    quantity: "",
    name: "",
    contact: "",
    address: "",
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await placeOrder(order);
      alert("Order placed successfully!");
      setOrder({ product: "", quantity: "", name: "", contact: "", address: "" });
    } catch (err) {
      console.error("Error placing order", err);
      alert("Failed to place order.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Place an Order</h1>
      <input
        name="product"
        placeholder="Product"
        value={order.product}
        onChange={handleChange}
      />
      <input
        name="quantity"
        placeholder="Quantity"
        value={order.quantity}
        onChange={handleChange}
      />
      <input
        name="name"
        placeholder="Name"
        value={order.name}
        onChange={handleChange}
      />
      <input
        name="contact"
        placeholder="Contact"
        value={order.contact}
        onChange={handleChange}
      />
      <textarea
        name="address"
        placeholder="Address"
        value={order.address}
        onChange={handleChange}
      />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;
