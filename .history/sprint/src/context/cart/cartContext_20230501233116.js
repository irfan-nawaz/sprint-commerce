import React, { createContext, useContext, useState } from 'react'

import { cartList } from '../../backend/db/cartList'

const CartContext = createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const addToCart = (product, _id, setDisabled) => {
    setCart([...cartList.push(product)])
  }
  const removeFromCart = (id, name) => {
    cart.splice(
      items.findIndex(function (i) {
        return i.id === 'abc'
      }),
      1,
    )
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
