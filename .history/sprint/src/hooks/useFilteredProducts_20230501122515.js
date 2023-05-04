import getProducts from '../query/getProducts'
import { useQuery } from '@tanstack/react-query'
// import filterReducer from '../reducer/filterReducer'
import { useReducer } from 'react'

const useFilteredProducts = () => {
  const products = useQuery(['products'], getProducts)
  const initialState = products.data
  console.log(initialState)
  const filterReducer = (state = initialState, action) => {
    switch (action) {
      case action:
        return state.filter((i) => i.categoryName === action)
      default:
        return state
    }
  }
  const [state = initialState, dispatch] = useReducer(
    filterReducer,
    initialState,
  )
  console.log(state, 'syte')
  return [products, state, dispatch]
}

export default useFilteredProducts
