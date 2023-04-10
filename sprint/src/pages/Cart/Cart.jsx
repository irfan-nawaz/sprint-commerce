import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import './Cart.css'
import CartList from './Components/CartList/CartList'
import Order from './Components/Order/Order'

export default function Cart() {
  return (
    <>
      <NavBar />
      <div className="cart">
        <CartList />
        <Order />
      </div>
    </>
  )
}
