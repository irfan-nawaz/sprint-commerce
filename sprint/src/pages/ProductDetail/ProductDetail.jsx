import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../../backend/db/products'

import NavBar from '../../components/Navbar/Navbar'
import ProductDetailCard from '../../components/Card/ProductDetailCard/ProductDetailCard'

export default function ProductDetail() {
  const [data, setData] = useState({})
  const { productId } = useParams()

  useEffect(() => {
    setData(products.find((item) => item._id === productId))
  }, [])
  return (
    <>
      <NavBar />
      <ProductDetailCard data={data} />
    </>
  )
}
