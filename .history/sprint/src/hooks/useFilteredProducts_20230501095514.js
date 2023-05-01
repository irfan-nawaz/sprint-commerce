import getProducts from '../query/getProducts'
import { useQuery } from '@tanstack/react-query'
import filterReducer from '../reducer/filterReducer'
import { useReducer } from 'react'

const useFilteredProducts = () => {
  const products = useQuery(['products'], getProducts)
  const initialState = products.data
  const [state, dispatch] = useReducer(filterReducer, initialState)
  return [products]
}

export default useFilteredProducts
