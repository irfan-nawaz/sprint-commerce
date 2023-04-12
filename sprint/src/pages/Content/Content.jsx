import React from 'react'
import './Content.css'
import NavBar from '../../components/Navbar/Navbar'
import ProductList from './Components/ProductList/ProductList'
import SideBar from '../../components/SideBar/SideBar'
// import { useCart } from '../../context/cart/cartContext'

export default function Category() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <SideBar />
        <ProductList />
      </div>
    </>
  )
}
