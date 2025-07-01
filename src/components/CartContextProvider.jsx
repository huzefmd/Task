import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({children }) {
    const [cartItem, setcartitem] = useState(0);
    

    return (
      <CartContext.Provider value={{ cartItem, setcartitem  }}>
        {children}
      </CartContext.Provider>
    );
}
