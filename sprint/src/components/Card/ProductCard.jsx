import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/cart/cartContext'

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
  console.log('hello')
  return (
    <article className="card">
      <h4>{categoryName}</h4>
      <h3>{title}</h3>
      <img src={imgSrc} alt="shoe" />
      <div class="badges">
        <i class="far fa-heart"></i>
      </div>
      <div class="banners hot-selling">
        <p>Hot</p>
        <i class="fas fa-fire"></i>
      </div>
      <div class="about">
        <h6 class="product-description">Sustainable Materials</h6>
        <p class="product-price">₹ {price}</p>
        <span>available in colors</span>
        <div class="colors">
          <div class="blue-unit"></div>
          <div class="green-unit"></div>
          <div class="red-unit"></div>
        </div>
      </div>
      <p>
        <Link to={`/product/${_id}`}>
          {/* <Link to={`/single`}> */}
          <button class="btn" id="default-btn">
            Buy Now
          </button>
        </Link>
      </p>
      <p>
        <button
          class="btn btn-otl-default"
          onClick={() => {
            addToCart.addToCart(
              { _id, price, imgSrc, rating, title, categoryName },
              _id,
            )
            // console.log(cartList)
          }}
        >
          Add to Cart
        </button>
      </p>
    </article>
  )
}
