import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'

import getProducts from '../../query/getProducts'
import useFilteredProducts from '../../hooks/useFilteredProducts'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const [productsQuery, state, dispatchCategory] = useFilteredProducts()
  return (
    <FilterContext.Provider
      value={{
        productsQuery,
        state,
        dispatchCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter }
