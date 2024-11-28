import React, { useEffect, useState } from "react";
import { fetchOrders, updateOrderStatus } from "../../api";
import "./index.css";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const getOrders = async () => {
      try {
        setLoading(true);
        const { data } = await fetchOrders();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders", err);
        setError("Failed to fetch orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  const handleStatusUpdate = async (orderId, status) => {
    try {
      await updateOrderStatus(orderId, status);
      alert(`Order status updated to ${status}!`);
      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status } : order
        )
      );
    } catch (err) {
      console.error("Error updating status", err);
      alert("Failed to update status. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {orders.length > 0 ? (
        <ul className="orders-list">
          {orders.map((order) => (
            <li key={order._id} className="order-item">
              <p>
                <strong>Product:</strong> {order.product}
              </p>
              <p>
                <strong>Quantity:</strong> {order.quantity}
              </p>
              <p>
                <strong>Buyer:</strong> {order.name}
              </p>
              <p>
                <strong>Contact:</strong> {order.contact}
              </p>
              <p>
                <strong>Address:</strong> {order.address}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              <div className="action-buttons">
                <button
                  onClick={() => handleStatusUpdate(order._id, "In Progress")}
                >
                  Mark as In Progress
                </button>
                <button
                  onClick={() => handleStatusUpdate(order._id, "Delivered")}
                >
                  Mark as Delivered
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
