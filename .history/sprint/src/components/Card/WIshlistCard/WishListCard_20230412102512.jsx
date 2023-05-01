import React from 'react'
import { Link } from 'react-router-dom'
import { useWishList } from '../../../context/wishList/wishListContext'

export default function WishListCard({
  data: {
    _id,
    title,
    price,
    categoryName,
    inWishlist,
    imgSrc,
    isBestSeller,
    rating,
  },
}) {
  const addToWishList = useWishList()
  return (
    <div class="container">
      <figure class="content main">
        <img
          src={imgSrc}
          alt="shoes"
          onClick={() => {
            addToWishList.addToWishList(
              {
                _id: _id,
                title: title,
                price: price,
                imgSrc: imgSrc,
                categoryName: categoryName,
              },
              _id,
            )
          }}
        />
        <figcaption class="title">
          <h2>{title}</h2>
          <p>{categoryName}</p>
        </figcaption>
      </figure>
      <div class="about">
        <h5 class="product-description">Sustainable Materials</h5>
        <p></p>
        <p>Unisex</p>
        <p>available in colors</p>
        <div class="colors">
          <div class="blue-unit"></div>
          <div class="green-unit"></div>
          <div class="red-unit"></div>
        </div>
        <h5 class="product-price">₹ {price}</h5>
      </div>
      <div class="icons">
        <i class="far fa-heart"></i>
        <button class="btn btn-otl-default">Add To Cart</button>
      </div>
    </div>
  )
}
