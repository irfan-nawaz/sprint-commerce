import React from 'react'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'
import { useFilter } from '../../../../context/filter/filterContext'
import useFilteredProducts from '../../../../hooks/useFilteredProducts'
import GridLoader from '../../../../loader/GirdLoader'

export default function ProductList() {
  const { filterDispatch } = useFilter()
  const [result, products] = useFilteredProducts()
  if (products.isLoading || products.is) return <GridLoader />
  return (
    <div class="products-container">
      <section id="cards">
        <button onClick={() => filterDispatch({ type: 'mens' })}>mens</button>
        <button onClick={() => filterDispatch({ type: 'womens' })}>
          womens
        </button>
        <div className="articlewrap">
          {result.map((data) => (
            <ProductCard data={data} />
          ))}
        </div>
      </section>
    </div>
  )
}
