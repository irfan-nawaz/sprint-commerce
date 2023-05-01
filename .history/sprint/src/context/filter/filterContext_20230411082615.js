import { createContext, useContext } from 'react'

import { products } from '../../backend/db/products'
import { filteredList } from '../../backend/db/filteredList'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const filterCategory = (category) => {
    products.map((item) => {
      if (item.categoryName === category) {
        filteredList.push(item)
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
