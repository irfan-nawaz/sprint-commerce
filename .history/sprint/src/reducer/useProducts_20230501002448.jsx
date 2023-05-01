import { fetchProducts } from '../backend/db/fetchProducts'
import { useQuery } from '@tanstack/react-query'
import { useReducer } from 'react'
const useProducts = () => {
  async function getProducts({ queryKey }) {
    const {
      data: { products },
    } = await fetchProducts('https://sprint/sprint-api/v1/products')
    return products
  }
  const productsQuery = useQuery(['products'], getProducts)
  productsQuery.isSuccess && console.log(productsQuery, 'this is products')
  const initialState = productsQuery.data
  const filterReducer = (state, action) => {
    console.log(state, action, 'this is state')
    switch (action) {
      case 'inc':
        return state.filter((p)=>)
      case 'dec':
        return state - 1
      default:
        return initialState
    }
  }
  const [filteredProducts, dispatch] = useReducer(filterReducer, initialState)

  return [productsQuery, filteredProducts, dispatch]
}

export default useProducts
