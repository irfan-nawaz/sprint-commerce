import { fetchProducts } from '../backend/db/fetchProducts'
export default async function getProducts({ queryKey  queryKey}) {
  const category = queryKey[1]
  console.log(category, 'this is a category')
  const {
    data: { products },
  } = await fetchProducts('https://sprint/sprint-api/v1/products')

  console.log(products, 'from async query ftn')

  const filteredProducts = products.filter(
    (item) => item.categoryName === category,
  )
  console.log(filteredProducts, 'filtered from async query ftn')
  return filteredProducts
}
