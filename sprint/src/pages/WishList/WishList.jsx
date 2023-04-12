import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/Card/ProductCard/ProductCard'
import { useWishList } from '../../context/wishList/wishListContext'
import WishListCard from '../../components/Card/WIshlistCard/WishListCard'

export default function WishList() {
  const wishList = useWishList().wishList
  return (
    <>
      <NavBar />
      <div class="articlewrap">
        {wishList.map((data) => (
          <WishListCard data={data} />
        ))}
      </div>
    </>
  )
}
