import { fetchProducts } from '../backend/db/fetchProducts'
import { filterCategory } from '../utils/filterCategory'
import { useFilter } from '../context/filter/filterContext'
export default async function getProducts({ queryKey }) {
  const {
    data: { products },
  } = await fetchProducts('https://sprint/sprint-api/v1/products')
  console.log(initialState.mens, 'this is query data')
  return filterCategory({ mens: true }, products)
  // return products
}
