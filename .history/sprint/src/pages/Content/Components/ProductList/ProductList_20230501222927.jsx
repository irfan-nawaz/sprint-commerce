import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'
import { useFilter } from '../../../../context/filter/filterContext'
import useFilteredProducts from '../../../../hooks/useFilteredProducts'
import ProductsLoader from '../../../../loader/ProductsLoader'

export default function ProductList() {
  const { filterDispatch } = useFilter()
  const [result, products] = useFilteredProducts()
  if (products.isLoading) return <ProductsLoader />
  return (
    <>
      <ProductsLoader />
s */}
    </>
  )
}
