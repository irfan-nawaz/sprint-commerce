import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFilter } from '../../../../context/filter/filterContext'

import NavBar from '../../components/Navbar/Navbar'
import ProductDetailCard from '../../components/Card/ProductDetailCard/ProductDetailCard'

export default function ProductDetail() {
  const [data, setData] = useState({})
  const { productId } = useParams()
  const filter = useFilter()

  useEffect(() => {
    setData(products.find((item) => item._id === productId))
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
