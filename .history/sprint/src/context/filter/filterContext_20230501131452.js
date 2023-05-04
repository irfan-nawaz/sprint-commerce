import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { filterReducer, initialState } from '../../reducer/filterReducer'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
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
