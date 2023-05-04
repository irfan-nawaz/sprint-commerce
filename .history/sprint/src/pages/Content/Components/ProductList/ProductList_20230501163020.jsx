import React from 'react'
import { useReducer } from 'react'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '../../../../components/Card/ProductCard/ProductCard'
import { useFilter } from '../../../../context/filter/filterContext'
import useProducts from '../../../../query/getProducts'
import GridLoader from '../../../../loader/GirdLoader'
import useFilteredProducts from '../../../../hooks/useFilteredProducts'
useFilteredProducts

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
  const products = useQuery(['products'], useProducts)
  const { filterState, filterDispatch } = useFilter()
  console.log(filterState, 'filter state')
  // console.log(products)
  // const initialState = products.data
  // const [state, dispatch] = useReducer(filterReducer, initialState)
  // const filter = useFilter()
  if (products.isLoading) return <GridLoader items={6} />
  if (products.isSuccess)
    return (
      <div class="products-container">
        <section id="cards">
          <button onClick={() => filterDispatch({ type: 'mens' })}>mens</button>
          <div className="articlewrap">
            {products.data.map((data) => (
              <ProductCard data={data} />
            ))}
          </div>
        </section>
      </div>
    )
}
