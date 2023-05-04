const filterReducer = (state, action) => {
  console.log(state)
  switch (action) {
    case 'mens':
      return state.filter((i) => i.categoryName === 'mens')
    default:
      return state
  }
}

export default filterReducer

import { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { filterReducer, initialState } from '../../reducer/filterReducer';
const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };