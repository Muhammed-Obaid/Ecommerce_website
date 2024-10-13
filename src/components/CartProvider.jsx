import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext({
  // cart: [],
  // setCart: () => { },
})
export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


