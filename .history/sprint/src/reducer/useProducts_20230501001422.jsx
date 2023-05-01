import { fetchProducts } from '../backend/db/fetchProducts'
import { useQuery } from '@tanstack/react-query'
import { useReducer } from 'react'
const useProducts = () => {
  async function getProducts({ queryKey }) {
    const cat = queryKey[1]
    console.log(cat, 'this is a category')
    const {
      data: { products },
    } = await fetchProducts('https://sprint/sprint-api/v1/products')
    return products
  }
  const productsQuery = useQuery(['products'], getProducts)
  productsQuery.isSuccess && console.log(productsQuery, 'this is products')
  const initialState = 0
  const filterReducer = (state, action) => {
    console.log(state, action, 'this is state')
    switch (action) {
      case 'inc':
        return state + 1
      case 'adec':
        return 'hello'
      default:
        console.log(state, action, 'this is state')
        return initialState
    }
  }
  const [filteredProducts, dispatch] = useReducer(filterReducer, initialState)

  return [productsQuery, filteredProducts, dispatch]
}

export default useProducts
