import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import styles

const Header = () => {
  const handleLogout = async () => {
    await fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/login"; // Redirect to login page after logout
  };
  return (
    <nav className="header">
      <div className="logo">RUCHI MART</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/shoes">Shoes</Link></li>
        <li><Link to="/perfume">Perfume</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
      <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
    </nav>
  );
};

export default Header;
