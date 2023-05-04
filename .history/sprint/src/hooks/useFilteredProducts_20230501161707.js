import getProducts from '../query/getProducts'
import { useQuery } from '@tanstack/react-query'
// import filterReducer from '../reducer/filterReducer'
import { useReducer } from 'react'
import { filterReducer, initialState } from '../reducer/filterReducer'
import { filterCategory } from '../utils/filterCategory'

const useFilteredProducts = () => {
  const products = useQuery(['products'], getProducts)

  const [state, dispatch] = useReducer(filterReducer, initialState)
  
}

export default useFilteredProducts
