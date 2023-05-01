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
  const products = useQuery(['products'], getProducts)
  products.isSuccess && console.log(products, 'this is products')
  const initialState = { ...products.data }
  const filterReducer = (state, action) => {
    switch (action) {
      case 'mens':
        return state.filter((p) => p.categoryName === 'mens')
      default:
        return state
    }
  }
  const useReducer(filterReducer, initialState)
}
