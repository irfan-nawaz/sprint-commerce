import React from 'react'
import { useCart } from '../../../../context/cart/cartContext'

import CartCard from '../CartCard/CartCard'

export default function CartList() {
  const cartList = useCart().cartList
  console.log(cartList)
  return cartList.map((data) => <CartCard data={data} />)
}
