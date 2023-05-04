import React from 'react'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'
import { useFilter } from '../../../../context/filter/filterContext'
import useFilteredProducts from '../../../../hooks/useFilteredProducts'
import 

export default function ProductList() {
  const { filterDispatch } = useFilter()
  const [result, products] = useFilteredProducts()
  if(products.isLoading) return <GridListy
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