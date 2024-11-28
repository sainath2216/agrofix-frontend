import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCatalog from "./components/ProductCatalog";
import OrderForm from "./components/OrderForm";
import OrderTracking from "./components/OrderTracking";
import AdminDashboard from "./components/AdminDashboard";
import Header from "./components/Header";

function App() {
  
  return (
    
    <>
     
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<ProductCatalog />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/track" element={<OrderTracking />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
