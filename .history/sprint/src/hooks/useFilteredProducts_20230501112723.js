import getProducts from '../query/getProducts'
import { useQuery } from '@tanstack/react-query'
// import filterReducer from '../reducer/filterReducer'
import { useReducer } from 'react'

const useFilteredProducts = () => {
  const products = useQuery(['products'], getProducts)
  const initialState = products.isSuccess ? products.data.map((x) => x) : []
  console.log(initialState.filter((i) => i.categoryName === 'mens'))
  const filterReducer = (state, action) => {
    switch (action) {
      case 'mens':
        return state.filter((i) => i.categoryName === 'mens')
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(filterReducer, initialState)
  return [products, state, dispatch]


  console.log(products)
  const initialState = products.data
  const [state, dispatch] = useReducer(filterReducer, initialState)
}

export default useFilteredProducts
