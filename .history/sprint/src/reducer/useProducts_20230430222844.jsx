import { fetchProducts } from '../backend/db/fetchProducts'
const useProducts = () => {
  async function getProducts({ queryKey }) {
    const cat = queryKey[1]
    console.log(cat, 'this is a category')
    const {
      data: { products },
    } = await fetchProducts('https://sprint/sprint-api/v1/products')
  }
  const products = useQuery(['products'], getProducts)
}