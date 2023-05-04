import React from 'react'
import { useReducer } from 'react'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'
import { useFilter } from '../../../../context/filter/filterContext'
import useFilteredProducts from '../../../../hooks/useFilteredProducts'

export default function ProductList() {
  const { filterDispatch } = useFilter()
  const [result] = useFilteredProducts()
  return (
    <div class="products-container">
      <section id="cards">
        <button onClick={() => filterDispatch({ type: 'mens' })}>mens</button>
        <div className="articlewrap">
          {result.map((data) => (
            <ProductCard data={data} />
          ))}
        </div>
      </section>
    </div>
  )
}
