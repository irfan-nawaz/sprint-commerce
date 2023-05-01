import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'

import { filteredList } from '../../backend/db/filteredList'
import getProducts from '../../querys/getProducts'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const products = useQuery([], getProducts)
  const productList = products.data
  console.log(products.data)
  const filterCategory = (category) => {
    if (!category) {
      return productList
    } else {
      productListmap((item) => {
        if (item.categoryName === category) {
          console.log(item.categoryName)
          // console.log(item)
          return filteredList.push(item)
        }
      })
    }
  }
  return (
    <FilterContext.Provider
      value={{ filterCategory, filteredList, productList }}
    >
      {children}
    </FilterContext.Provider>
  )
}
const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter }
