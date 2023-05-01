import { fetchProducts } from '../backend/db/fetchProducts'
export default async function getProducts({ queryKey }) {
  const cat = queryKey[1]
  console.log(cat, 'this is a category')
  const {
    data: { products },
  } = await fetchProducts('https://sprint/sprint-api/v1/products')

  console.log(products, 'from async query ftn')

  // return products

  const filteredProducts = products.filter((item) => item.categoryName === cat)
  console.log(filteredProducts, 'filtered from async query ftn')
  return filteredProducts
}
