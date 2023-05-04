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
    <div class="products-container">
      <ProductsLoader />
      {/* <section id="cards">
        <button onClick={() => filterDispatch({ type: 'mens' })}>mens</button>
        <button onClick={() => filterDispatch({ type: 'womens' })}>
          womens
        </button>
        <div className="articlewrap">
          {result.map((data) => (
            <ProductCard data={data} />
          ))}
        </div>
      </section> */}
    </div>
  )
}
