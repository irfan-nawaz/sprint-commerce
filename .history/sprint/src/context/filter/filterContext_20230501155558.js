import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { filterReducer, initialState } from '../../reducer/filterReducer'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState)
  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, initialState }}
    >
      {children}
    </FilterContext.Provider>
  )
}
const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter }
