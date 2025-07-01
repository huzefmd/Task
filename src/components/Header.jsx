
import React, { useContext } from "react";
import {  ShoppingCart } from "lucide-react";
import { CartContext } from "./CartContextProvider";
import { useNavigate } from "react-router-dom";
import CheckOutPage from "./CheckOutPage";



function Header({ name }) {
  const { cartItem } = useContext(CartContext);
  const navigate = useNavigate();

  const redirectToCart = () => {
    navigate('/CheckOutPage')
  }

  return (
    <div>
      <div className="flex justify-between items-center bg-[#232f3e] text-white px-35 py-4">
        <h1 className="font-bold text-3xl">amazon.in</h1>
        <div className="flex gap-5">
          <h2>Hello {name}</h2>
          <div className="relative inline-block cursor-pointer" onClick={redirectToCart}>
            <ShoppingCart size={24} />
            <div className="absolute -top-2 -right-2 rounded-full w-5 h-5 bg-amber-400 flex items-center justify-center text-black text-xs ">
              {cartItem}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
