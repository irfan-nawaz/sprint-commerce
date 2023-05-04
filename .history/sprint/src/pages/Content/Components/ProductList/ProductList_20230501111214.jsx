import React from 'react'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'
import { useFilter } from '../../../../context/filter/filterContext'
import getProducts from '../../../../query/getProducts'
import GridLoader from '../../../../loader/GirdLoader'

const filterReducer = (state, action) => {
  console.log(state)
  switch (action) {
    case 'mens':
      return state.filter((i) => i.categoryName === 'mens')
    default:
      return state
  }
}

export default function ProductList() {
  const products = useQuery(['products'], getProducts)
  console.log(products)

  if (products.isLoading) return <GridLoader items={6} />
  if (products.isSuccess){
    
    return (
      <div class="products-container">
        <section id="cards">
          <div className="articlewrap">
            {products.data.map((data) => (
              <ProductCard data={data} />
            ))}
          </div>
        </section>
      </div>
    )
            }
}
