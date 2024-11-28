import axios from "axios";

// Set up the base API instance
const api = axios.create({
  baseURL: "https://agrofix-backend.onrender.com/api", // Replace with your backend URL
});

// Product API calls
export const fetchProducts = () => api.get("/products");

// Order API calls
export const placeOrder = (orderData) => api.post("/orders", orderData);
export const trackOrder = (orderId) => api.get(`/orders/${orderId}`);
export const fetchOrders = () => api.get("/orders"); // Admin use
export const updateOrderStatus = (orderId, status) =>
  api.put(`/orders/${orderId}`, { status });

// Inventory API calls
export const addProduct = (productData) => api.post("/inventory", productData);
export const updateProduct = (productId, productData) =>
  api.put(`/inventory/${productId}`, productData);
export const deleteProduct = (productId) =>
  api.delete(`/inventory/${productId}`);
