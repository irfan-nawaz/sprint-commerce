import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'

// import { products } from '../../backend/db/products'
import { filteredList } from '../../backend/db/filteredList'
import getProducts from '../../querys/getProducts'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const products = useQuery(['products'], getProducts)
  products.isSuccess && console.log(products.data, 'this is products') && const productList = 
  const filterCategory = (category) => {
    products.data.map((item) => {
      if (item.categoryName === category) {
        console.log(item.categoryName)
        // console.log(item)
        return filteredList.push(item)
      }
    })
  }
  return (
    <FilterContext.Provider value={{ filterCategory, filteredList }}>
      {children}
    </FilterContext.Provider>
  )
}
const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter }
