import { fetchProducts } from '../backend/db/fetchProducts'
import { filterCategory } from '../utils/filterCategory'
import { initialState } from '../reducer/filterReducer'
export default async function getProducts({ queryKey }) {
  const [, mens, womens] = queryKey
  const {
    data: { products },
  } = await fetchProducts('https://sprint/sprint-api/v1/products')
  return filterCategory({ mens: false, womens: false }, products)
}
