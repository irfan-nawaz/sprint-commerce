import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useCart } from '../../../context/cart/cartContext'
import { useWishList } from '../../../context/wishList/wishListContext'
import { products } from '../../../backend/db/products'
import './ProductDetailCard.css'

import StarsRating from 'react-star-rate'

export default function ProductDetailCard({
  data: { _id, price, imgSrc, title, categoryName, rating },
}) {
  const addToCart = useCart()
  const addToWishList = useWishList()
  console.log(addToWishList)

  return (
    <div className="cart">
      <section class="product">
        <img src={imgSrc} alt="shoes" />
      </section>
      <section class="order">
        <div class="order">
          <figure class="content title-top">
            <h3>{title}</h3>
            <p>{categoryName}</p>
            <p>{<StarsRating classNamePrefix="size" value={rating} />}</p>
          </figure>
          <div class="about">
            <article className="terms">
              <div>
                The <strong>{title}</strong> shoes are suitable for
                <strong> {categoryName}</strong>.
              </div>
              <div>
                We guarentee the Products at <strong>Sprint Store </strong> are
                100% Original.
              </div>
              <p>
                All Products brought from us are eleigible for 7 days return.
              </p>
            </article>
          </div>
        </div>
        <h3>Product Information</h3>
        <hr />
        <div class="order-details">
          <p>Price:</p>
          <p>₹{price}</p>
        </div>
        <div class="order-details">
          <p>Delivery charges:</p>
          <p>₹499</p>
        </div>
        <hr />
        <div class="order-details">
          <h3>Total:</h3>
          <h3>₹{parseInt(price) + parseInt('499')}</h3>
        </div>
        <hr />
        <p>
          <button
            class="btn"
            id="primary"
            onClick={() => {
              addToCart.addToCart(
                {
                  _id: _id,
                  title: title,
                  price: price,
                  imgSrc: imgSrc,
                  categoryName: categoryName,
                  rating: rating,
                },
                _id,
              )
            }}
          >
            Add to Cart
          </button>
        </p>
        <p>
          <button
            class="btn btn-otl-primary"
            onClick={() => {
              addToWishList.addToWishList(
                {
                  _id: _id,
                  title: title,
                  price: price,
                  imgSrc: imgSrc,
                  categoryName: categoryName,
                  rating: rating,
                },
                _id,
              )
            }}
          >
            Move to Wishlist
          </button>
        </p>
      </section>
    </div>
  )
}
