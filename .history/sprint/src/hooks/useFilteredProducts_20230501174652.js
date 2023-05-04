import getProducts from '../query/getProducts'
import { useQuery } from '@tanstack/react-query'
import { filterCategory } from '../utils/filterCategory'
import { useFilter } from '../context/filter/filterContext'

const useFilteredProducts = () => {
  const { filterState } = useFilter()
  const products = useQuery(['products', filterState], getProducts)

  console.log(filterState, 'filter state')

  const result = filterCategory(filterState, products?.data ?? [])
  console.log(result, 'final result')
  return [result, products]
}

export default useFilteredProducts
