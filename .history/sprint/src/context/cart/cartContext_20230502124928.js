import React, { createContext, useContext, useState} from 'react'

const CartContext = createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const addToCart = (product, _id, setDisabled) => {
    setCart([...cart, { ...product }])
  }
  const removeFromCart = (id, name) => {
    console.log(id, 'from cartcontext')
    setCart(
      cart.filter((p) => {
        console.log(p)
        return p._id !== id
      }),
    )
  }
  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
