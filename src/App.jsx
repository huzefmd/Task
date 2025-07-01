import React from "react";
import Header from "./components/Header";
import { CartContextProvider } from "./components/CartContextProvider";
import Card from "./components/Card";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOutPage from "./components/CheckOutPage";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header name={"Huzefa"} />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/CheckOutPage" element={<CheckOutPage/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
