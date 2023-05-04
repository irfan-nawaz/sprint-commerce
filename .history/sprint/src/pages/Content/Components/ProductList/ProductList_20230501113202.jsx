import React from 'react'
import { useReducer } from 'react'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'
import { useFilter } from '../../../../context/filter/filterContext'
import getProducts from '../../../../query/getProducts'
import GridLoader from '../../../../loader/GirdLoader'

// const filterReducer = (state, action) => {
//   console.log(state)
//   switch (action) {
//     case 'mens':
//       return state.filter((i) => i.categoryName === 'mens')
//     default:
//       return state
//   }
// }

export default function ProductList() {
  // const products = useQuery(['products'], getProducts)
  // console.log(products)
  // const initialState = products.data
  // const [state, dispatch] = useReducer(filterReducer, initialState)
  const filter = useFilter()
  console.log(filter)
  // if (productsQuery.isLoading) return <GridLoader items={6} />
  // if (productsQuery.isSuccess) {
  return (
    <div class="products-container">
      <section id="cards">
        <button
          onClick={() => {
            filter.dispatchCategory('mens')
          }}
        >
          filter
        </button>
        <div className="articlewrap">
          {filter.state.map((data) => (
            <ProductCard data={data} />
          ))}
        </div>
      </section>
    </div>
  )
  // }
}
