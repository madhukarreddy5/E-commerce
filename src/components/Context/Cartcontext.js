import React, { createContext } from 'react'
import  { useState } from 'react';
export const CartContext = createContext(null);
const CartContextProvider = (props) => {
const [cartValue, setCartValue] = useState([]);
 const contextvalue={cartValue, setCartValue};
 return(
  <>
  <CartContext.Provider value={contextvalue}>
    {props.children}
  </CartContext.Provider>
  </>
 )
}

export default CartContextProvider
