import { createContext, useContext } from 'react'


import { filteredList } from '../../backend/db/filteredList'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={filteredList}>
      {children}
    </ProductContext.Provider>
  )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }
