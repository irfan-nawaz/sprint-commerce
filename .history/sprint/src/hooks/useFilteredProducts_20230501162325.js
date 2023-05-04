import getProducts from '../query/getProducts'
import { useQuery } from '@tanstack/react-query'
// import filterReducer from '../reducer/filterReducer'
import { useReducer } from 'react'
import { filterReducer, initialState } from '../reducer/filterReducer'
import { filterCategory } from '../utils/filterCategory'
import { useFilter } from '../context/filter/filterContext'

const useFilteredProducts = () => {
  const products = useQuery(['products'], getProducts)

  const { filterState } = useFilter()

  const result = filterCategory(filterState, products?.data)
  console.log(result)
  return [result]
}

export default useFilteredProducts
