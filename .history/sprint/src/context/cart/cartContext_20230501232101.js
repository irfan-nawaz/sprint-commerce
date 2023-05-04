import React, { createContext, useContext } from 'react'

import { cartList } from '../../backend/db/cartList'

const CartContext = createContext()

function CartProvider({ children }) {
  const addToCart = (product, _id, setDisabled) => {
    cartList.push(product)
  }
  const removeFromCart = (id, name) => {
    cartList.filter(()=>!)
  }
  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartList,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
