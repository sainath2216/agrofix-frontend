import { Link } from "react-router-dom";

import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-logo-container">
        <h1>AgroFix</h1>
        <ul className="nav-bar-mobile-icons-container">
        <li className="nav-menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="order">Order Now</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/track">Track Order</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/admin">Admin Access</Link>
          </li>
        </ul>
      </div>

      <div className="nav-bar-large-container">
      <h1>AgroFix</h1>

        <ul className="nav-menu">
        <li className="nav-menu-item">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/order" >
              Order Now
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/track">Track Order</Link>
          </li>
          
          <li className="nav-menu-item">
            <Link to="/admin">Admin Access</Link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
