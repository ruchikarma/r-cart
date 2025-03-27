import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import ShoesPage from "./pages/ShoesPage";
import PerfumePage from "./pages/PerfumePage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

import './App.css';

function App() {
  return (
    <Router>
    <Sidebar />
    <Routes>
      <Route path="/women" element={<WomenPage />} />
      <Route path="/men" element={<MenPage />} />
      <Route path="/shoes" element={<ShoesPage />} />
      <Route path="/perfume" element={<PerfumePage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  </Router>

  );
}

export default App;
