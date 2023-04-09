import React from 'react'
import './Content.css'
import NavBar from '../../components/Navbar/Navbar'
import ProductList from './ProductList/ProductList'
import SideBar from '../../components/SideBar/SideBar'

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
