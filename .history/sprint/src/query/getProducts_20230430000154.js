import { fetchProducts } from '../backend/db/fetchProducts'
export default async function getProducts({ queryKey }) {
  const [name, prod] = queryKey
  console.log(prod, 'this is a category')
  const {
    data: { products },
  } = await fetchProducts('https://sprint/sprint-api/v1/products')

  console.log(products, 'from async query ftn')

  const filteredProducts = products.filter((item) => item.categoryName === prod)
  console.log(filteredProducts, 'filtered from async query ftn')
  return filteredProducts
}
