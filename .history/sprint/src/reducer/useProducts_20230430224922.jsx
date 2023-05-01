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
  }
  const productsQuery = useQuery(['products'], getProducts)
  productsQuery.isSuccess && console.log(productsQuery, 'this is products')
  const initialState = { ...products.data }
  const filterReducer = (state, action) => {
    switch (action) {
      case 'mens':
        return state.filter((p) => p.categoryName === 'mens')
      default:
        return state
    }
  }
  const [filteredProducts, dispatch] = useReducer(filterReducer, initialState)
}
