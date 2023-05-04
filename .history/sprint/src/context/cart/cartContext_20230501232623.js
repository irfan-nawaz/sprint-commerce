import React, { createContext, useContext } from 'react'

import { cartList } from '../../backend/db/cartList'

const CartContext = createContext()

function CartProvider({ children }) {
  const[cart,setCVart]
  const addToCart = (product, _id, setDisabled) => {
    cartList.push(product)
  }
  const removeFromCart = (id, name) => {
    cartList.filter((p) => p._id !== id)
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
