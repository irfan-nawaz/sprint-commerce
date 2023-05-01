import { fetchProducts } from '../backend/db/fetchProducts'
import { useReducer } from 'react'
async function useProducts({ queryKey }) {
  const cat = queryKey[1]
  console.log(cat, 'this is a category')
  const {
    data: { products },
  } = await fetchProducts('https://sprint/sprint-api/v1/products')

  console.log(products, 'from async query ftn')

  // return products
  const initialState = { ...products }
  const filterReducer = (state, action) => {
    switch (action) {
      case 'mens':
        return state.filter((p) => p.categoryName === 'mens')
      default:
        return state
    }
  }
  useReducer()
}

const products = useQuery(['products'], useProducts)