import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFilter } from '../../context/filter/filterContext'
import useFilteredProducts from '../../hooks/useFilteredProducts'

import NavBar from '../../components/Navbar/Navbar'
import ProductDetailCard from '../../components/Card/ProductDetailCard/ProductDetailCard'

export default function ProductDetail() {
  const [data, setData] = useState({})
  const { productId } = useParams()
  const [result, products] = useFilteredProducts()
  const filter = useFilter()

  useEffect(() => {
    setData(resultfind((item) => item._id === productId))
  }, [])
  if (filter.products.isLoading) return <h1>Loading...</h1>
  if (filter.products.isSuccess)
    return (
      <>
        <NavBar />
        <ProductDetailCard data={data} />
      </>
    )
}
