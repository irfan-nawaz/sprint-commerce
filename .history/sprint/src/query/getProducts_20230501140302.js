import { fetchProducts } from '../backend/db/fetchProducts'
import { filterCategory } from '../utils/filterCategory'
export default async function getProducts({ queryKey }) {
  const [mens, womens] = queryKey[1]
  console.log(cat, 'this is a category')
  const {
    data: { products },
  } = await fetchProducts('https://sprint/sprint-api/v1/products')
  filterCategory({ mens, womens }, products)
}
