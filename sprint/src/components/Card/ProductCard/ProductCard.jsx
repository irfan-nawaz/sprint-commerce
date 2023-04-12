import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import { useCart } from '../../../context/cart/cartContext'
import StarsRating from 'react-star-rate'
import './ProductCard.css'

export default function ProductCard({
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
  const addToCart = useCart()
  const [value, setValue] = useState(rating)
  return (
    <div className="container, main" style={{ border: `1px solid #e1e1e1` }}>
      <Link to={`/product/${_id}`}>
        <figure className="content">
          <img src={imgSrc} alt="shoe" />
          <figcaption class="title">
            <h3>{title}</h3>
            <h5 class="product-description">{categoryName}</h5>
          </figcaption>
        </figure>
      </Link>
      <div class="about">
        <Link to={`/product/${_id}`}>
          <h5 class="product-price">Price: ₹{price}</h5>
        </Link>
        <StarsRating
          classNamePrefix="size"
          value={value}
          onChange={(value) => {
            setValue(value)
          }}
        />
      </div>
    </div>
  )
}
