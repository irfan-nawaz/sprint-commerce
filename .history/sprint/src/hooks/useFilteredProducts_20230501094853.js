import getProducts from '../query/getProducts'
import { useQuery } from '@tanstack/react-query'

const useFilteredProducts = (category) => {
  const products = useQuery(['products'], getProducts)
}

export default useFilteredProducts
