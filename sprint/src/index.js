import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ProductProvider } from './context/product/productContext'
import { CartProvider } from './context/cart/cartContext'
import { WishlistProvider } from './context/wishList/wishListContext'
import { FilterProvider } from './context/filter/filterContext'

import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
const client = new QueryClient()

root.render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={client}>
        <WishlistProvider>
          <CartProvider>
            <ProductProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
            </ProductProvider>
          </CartProvider>
        </WishlistProvider>
      </QueryClientProvider>
    </Router>
  </StrictMode>,
)
