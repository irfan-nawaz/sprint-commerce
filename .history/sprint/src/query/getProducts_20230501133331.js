import { fetchProducts } from '../backend/db/fetchProducts'
import {fil}
export default async function getProducts({ queryKey }) {
  const cat = queryKey[1]
  console.log(cat, 'this is a category')
  const {
    data: { products },
  } = await fetchProducts('https://sprint/sprint-api/v1/products')

  return products
}
