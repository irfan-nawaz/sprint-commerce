import { fetchProducts } from '../backend/db/fetchProducts'
import { useReducer } from 'react'
export default async function useProducts({ queryKey }) {
  const cat = queryKey[1]
  console.log(cat, 'this is a category')
  const {
    data: { products },
  } = await fetchProducts('https://sprint/sprint-api/v1/products')

  console.log(products, 'from async query ftn')

?

  return products
}
