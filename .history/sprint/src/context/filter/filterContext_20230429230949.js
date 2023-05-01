import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'

// import { products } from '../../backend/db/products'
import { filteredList } from '../../backend/db/filteredList'
import getProducts from '../../query/getProducts'
import ProductList from '../../pages/Content/Components/ProductList/ProductList'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const Products = (category) => {
    const products = useQuery(['products'], getProducts)
  }
  const products = useQuery(['products'], getProducts)
  products.isSuccess && console.log(products, 'this is products')
  const productsList = products.isLoading
    ? []
    : products.isSuccess
    ? products.data
    : []
  console.log(productsList)
  const filterCategory = (category) => {
    if (products.isLoading) {
      return []
    } else if (products.isSuccess && !category) {
      filteredList = products.data
      console.log('copied', filteredList)
      return filteredList
    } else {
      // filteredList.length = 0
      products.isSuccess &&
        products.data.map((item) => {
          if (item.categoryName === category) {
            console.log(item.categoryName)
            console.log(item)
            return filteredList.push(item)
          }
        })
    }
  }
  products.isSuccess && console.log(filteredList)
  return (
    <FilterContext.Provider
      value={{ filterCategory, filteredList, productsList, products }}
    >
      {children}
    </FilterContext.Provider>
  )
}
const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter }
