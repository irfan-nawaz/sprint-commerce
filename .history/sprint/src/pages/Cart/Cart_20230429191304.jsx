import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import OrderSummaryCard from '../../components/Card/OrderSummaryCard/OrderSummaryCard'
import CartList from './Components/CartList/CartList'
import './Cart.css'

export default function Cart() {
  return (
    <>
      <NavBar />
      <CartList />
    </>
  )
}
