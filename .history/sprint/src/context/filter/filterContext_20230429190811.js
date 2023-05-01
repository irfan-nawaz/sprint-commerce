import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'

import { filteredList } from '../../backend/db/filteredList'
import getProducts from '../../querys/getProducts'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const products = useQuery([], getProducts)
  console.log(products.data)
  const filterCategory = (category) => {
    products.filter((item) => item.categoryName === category)
  }
  return (
    <FilterContext.Provider value={{ filterCategory, filteredList }}>
      {children}
    </FilterContext.Provider>
  )
}
const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter }
