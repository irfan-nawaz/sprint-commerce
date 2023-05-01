import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useReducer } from 'react'

import { filteredList } from '../../backend/db/filteredList'
import getProducts from '../../query/getProducts'
import useProducts from '../../reducer/useProducts'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const [query, reducer] = useProducts()
  const products = useQuery(['products'], getProducts)
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
            return filteredList.push(item)
          }
        })
    }
  }
  products.isSuccess && console.log(filteredList)
  return (
    <FilterContext.Provider
      value={{
        filterCategory,
        filteredList,
        products,
        query,
        list,
        dispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter }
