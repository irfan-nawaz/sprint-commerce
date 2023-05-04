import { createContext, useContext } from 'react'

import { filterReducer, initialState } from '../../reducer/filterReducer'

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
