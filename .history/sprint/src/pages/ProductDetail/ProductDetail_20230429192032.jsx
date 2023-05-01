import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { products } from '../../backend/db/products'
import { useFilter } from '../../context/filter/filterContext'

import NavBar from '../../components/Navbar/Navbar'
import ProductDetailCard from '../../components/Card/ProductDetailCard/ProductDetailCard'

export default function ProductDetail() {
  const [data, setData] = useState({})
  const { productId } = useParams()
  const filter = useFilter()

  useEffect(() => {
    setData(filter.productList.find((item) => item._id === productId))
  }, [])
  return (
    <>
      <NavBar />
      <ProductDetailCard data={data} />
    </>
  )
}
