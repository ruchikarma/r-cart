import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import WomenPage from "./pages/WomenPage.js";
import MenPage from "./pages/MenPage.js";
import ShoesPage from "./pages/ShoesPage.js";
import PerfumePage from "./pages/PerfumePage.js";
import WishlistPage from "./pages/WishlistPage.js";
import CartPage from "./pages/CartPage.js";
import CheckoutPage from "./pages/CheckoutPage.js";

import './App.css';
import Header from './components/Header.js';
import Login from './pages/Login.js';

function App() {
  const [isAuthenticated,setAuthenticated] = useState(false);
       useEffect(()=>{
        fetch("http://localhost:5000/check-auth", {
          method: "GET",
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => setAuthenticated(data.authenticated));
      }, []);

  return (

<Router>
            {isAuthenticated && <Header />}
      <Routes>
              <Route path="/login" element={<Login/>} 
              />
              {isAuthenticated?(  
                <>
                <Route path="/*" element={<Others/>}/>
                </>
              ):( <Route path="/*" element={<Navigate to="/login" />} />)
              }
          </Routes>
        </Router>);


function Others(){
        return (<>
          <Header/>
    <Routes>
      <Route path="/women" element={<WomenPage />} />
      <Route path="/men" element={<MenPage />} />
      <Route path="/shoes" element={<ShoesPage />} />
      <Route path="/perfume" element={<PerfumePage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
    </>);
       }
}

export default App;
