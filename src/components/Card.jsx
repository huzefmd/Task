import React, { useContext, useState } from "react";
import { CartContext } from "./CartContextProvider";
import CheckOutPage from "./CheckOutPage";

function Card({ img, name, price }) {
  const { cartItem,setcartitem } = useContext(CartContext);
  const [add, setadd] = useState(false);
  const additem = () => {
    setcartitem((c) => c + 1)
    setadd(!add);
    if (add) {
      setcartitem(cartItem - 1);
    }
  }
  return (
    <div className="border border-gray-300  w-auto overflow-hidden h-auto mt-10  items-center flex justify-center flex-col ">
      <img src={img} />
      <h4 className="font-bold ">{name}</h4>
      <strong>{price}</strong>
      <button className="rounded-2xl p-4 bg-amber-300 mt-6" onClick={additem} >
        {add ? "Proceed to check out" : "Add to Cart"}
      </button>
    </div>
  );
}

export default Card;
