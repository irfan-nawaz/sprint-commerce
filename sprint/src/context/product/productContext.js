import { createContext, useContext} from 'react';

import { products } from '../../backend/db/products';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    return(
        <ProductContext.Provider value={products}>
        {children}
      </ProductContext.Provider>
    )
}

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };