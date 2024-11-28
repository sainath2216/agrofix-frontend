import React, { useState } from "react";
import { trackOrder } from "../../api";

import "./index.css"


const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);

  const handleTrack = async () => {
    try {
      const { data } = await trackOrder(orderId);
      setOrderStatus(data.status);
    } catch (err) {
      console.error("Error tracking order", err);
      alert("Failed to track order.");
    }
  };

  return (
    <div>
      <h1>Track Your Order</h1>
      <input
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={handleTrack}>Track</button>
      {orderStatus && <p>Order Status: {orderStatus}</p>}
    </div>
  );
};

export default OrderTracking;
