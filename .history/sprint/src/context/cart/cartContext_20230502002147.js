import React, { createContext, useContext, useState } from 'react'

import { cartList } from '../../backend/db/cartList'

// import { initialCartState, cartReducer } from '../../reducer/cartReducer'

const CartContext = createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const addToCart = (product, _id, setDisabled) => {
    setCart([...cartList.push(product)])
  }
  const removeFromCart = (id, name) => {
    cart.pop()
    setCart[]
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
