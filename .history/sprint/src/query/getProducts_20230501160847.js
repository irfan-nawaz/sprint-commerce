import { fetchProducts } from '../backend/db/fetchProducts'
import { filterCategory } from '../utils/filterCategory'
import { useFilter } from '../context/filter/filterContext'
export default async function useProducts({ queryKey }) {
  const {
    data: { products },
  } = await fetchProducts('https://sprint/sprint-api/v1/products')
  return products
}
