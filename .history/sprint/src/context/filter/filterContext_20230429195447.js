import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'

// import { products } from '../../backend/db/products'
import { filteredList } from '../../backend/db/filteredList'
import getProducts from '../../querys/getProducts'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const categories = useQuery(['categories'], getProducts)
  categories.isSuccess && console.log(categories, 'this is products')
  const filterCategory = (category) => {
    categories.data.map((item) => {
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
