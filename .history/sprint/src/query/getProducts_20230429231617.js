import { fetchProducts } from '../backend/db/fetchProducts'
export default async function getProducts({ querykey }) {
  const category = querykey[1]
  const {
    data: { products },
  } = await fetchProducts('https://sprint/sprint-api/v1/products')

  const filteredProducts = products.filter((item) => {
    if (item.categoryName === category) {
      console.log(item.categoryName)
      console.log(item)
      return filteredList.push(item)
    }
  })
}
