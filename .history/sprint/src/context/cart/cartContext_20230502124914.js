import React, { createContext, useContext, useState, useReducer } from 'react'

import { cartList } from '../../backend/db/cartList'

const CartContext = createContext()

function CartProvider({ children }) {
  // const [cart, setCart] = useState([])
  // const addToCart = (product, _id, setDisabled) => {
  //   setCart([...cart, { ...product }])
  // }
  // const removeFromCart = (id, name) => {
  //   console.log(id, 'from cartcontext')
  //   setCart(
  //     cart.filter((p) => {
  //       console.log(p)
  //       return p._id !== id
  //     }),
  //   )
  // }

  const [CartItems,setCartItems]=useState([]);

  const addToCart=(itemData)=>{
      const itemPresent=CartItems.find(({id})=>id==itemData.id);
      if(itemPresent){
          
          setCartItems(CartItems.map(item=>item.id===itemData.id ? {...item,quantity:item.quantity+1} : item))
      }
      else{
          setCartItems( [...CartItems,{...itemData,quantity:1}])

      }
    
     
  }

  const iteminCart=(itemData)=>{
      return CartItems.find(({id})=>id==itemData.id);
  }

  const removeFromCart=(itemData)=>{
      setCartItems(CartItems.filter(({id})=>itemData.id !==id));
  }

  const totalCartValue=CartItems.reduce((totalValue,item)=>totalValue+=item.price*item.quantity,0); 

  const totalDeliveryTime=CartItems.reduce((totalTime,item)=> totalTime+=item.delivery_time,0);

  const handelDecrement=(itemData)=>{

      const selectedItem=CartItems.find(({id})=>id===itemData.id);
      if(selectedItem.quantity===1){
          removeFromCart(itemData)
      }
      else{
          setCartItems(CartItems.map(item=>item.id===itemData.id ? {...item,quantity:item.quantity-1} : item));
      }

  }

  const numberOfItems=CartItems.length;
  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartList,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
