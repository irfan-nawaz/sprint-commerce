import { createContext, useContext } from 'react'

import { wishList } from '../../backend/db/wishList'

const WishlistContext = createContext()

const WishlistProvider = ({ children }) => {
  const addToWishList = (product, _id, setDisabled) => {
    wishList.push(product)
  }
  const removeFromWishList = (id, name) => {
    console.log('deleated')
  }
  return (
    <WishlistContext.Provider
      value={{
        addToWishList,
        removeFromWishList,
        wishList,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishList = () => useContext(WishlistContext)

export { WishlistProvider, useWishList }
