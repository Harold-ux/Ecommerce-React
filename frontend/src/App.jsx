import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import kid_banner from "./Components/Assets/banner_kids.png";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import Comenta from "./Components/Comenta/Comenta";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ShopContextProvider from "./Context/ShopContext";
import CartWidget from "./Components/CartWidget/CartWidget";
import LoginSignUp from "./Pages/LoginSignUp";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/CartWidget" element={<CartWidget />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Comenta />
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
