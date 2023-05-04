import getProducts from '../query/getProducts'
import { useQuery } from '@tanstack/react-query'
// import filterReducer from '../reducer/filterReducer'
import { useReducer } from 'react'
import { filterReducer } from '../reducer/filterReducer'

const useFilteredProducts = () => {
  const products = useQuery(['products'], getProducts)
  const initialState = products.data
  console.log(initialState)
}

export default useFilteredProducts
