import getProducts from '../query/getProducts'
import { useQuery } from '@tanstack/react-query'
// import filterReducer from '../reducer/filterReducer'
import { useReducer } from 'react'

const useFilteredProducts = () => {
  const products = useQuery(['products'], getProducts)
  const initialState = products.is products.data.map((x) => x)
  console.log(initialState)
  const filterReducer = (state, action) => {
    console.log(state)
    switch (action) {
      case 'mens':
        return state.filter((i) => i.categoryName === 'mens')
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(filterReducer, initialState)
  return [products, state, dispatch]
}

export default useFilteredProducts
