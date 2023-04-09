import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import './Cart.css'
import Product from './Components/Product/Product'
import Order from './Components/Order/Order'

export default function Cart() {
  return (
    <>
      <NavBar />
      <div className="cart">
        <Product />
        <Order />
      </div>
    </>
  )
}
