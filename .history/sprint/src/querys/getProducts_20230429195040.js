import { fetchProducts } from '../backend/db/fetchProducts'
export default async function getProducts() {
  const {
    data: { products },
  } = await fetchProducts('https://sprint/sprint-api/v1/producst')
  https://sprint/sprint-api/v1/products

  return products
}
