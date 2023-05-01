import getProducts from '../query/getProducts'
import { useQuery } from '@tanstack/react-query'
// import filterReducer from '../reducer/filterReducer'
import { useReducer } from 'react'

const useFilteredProducts = () => {
  const products = useQuery(['products'], getProducts)
  const initialState = products.isSuccess ? products.data.map((x) => x) : []
  console.log(initialState.filter((i)=> ))
  const filterReducer = (state, action) => {
    console.log(state, 'state')
    switch (action) {
      case 'mens':
        return state.filter((i) => i.categoryName === 'mens')
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(filterReducer, initialState)
  console.log(state)
  return [products, state, dispatch]
}

export default useFilteredProducts
