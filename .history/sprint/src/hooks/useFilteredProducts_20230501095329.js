import getProducts from '../query/getProducts'
import { useQuery } from '@tanstack/react-query'
import filterReducer from '../reducer/filterReducer'

const useFilteredProducts = (category) => {
  const products = useQuery(['products'], getProducts)
  const initialState = products.data
}

export default useFilteredProducts
