import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../../backend/db/products'
import { useCart } from '../../context/cart/cartContext'
export default function ProductDetail() {
  const [data, setData] = useState({})
  const { productId } = useParams()
  const addToCart = useCart()

  useEffect(() => {
    setData(products.find((item) => item._id === productId))
  }, [])
  return (
    <div>
      <div class="container">
        <figure class="content badge">
          <img src={data.imgSrc} alt="About" />
          <figcaption class="title">
            <h2>Nike Air Max</h2>
            <p>Soft and Smooth.</p>
          </figcaption>
          <i class="far fa-heart"></i>
          <h4>NEW</h4>
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
          <h5 class="product-price">₹ 8,995</h5>
        </div>
        <div class="icons">
          <button
            class="btn full-width"
            id="default-btn"
            onClick={() => {
              addToCart.addToCart(
                {
                  _id: data._id,
                  title: data.title,
                  price: data.price,
                  imgSrc: data.imgSrc,
                  categoryName: data.categoryName,
                },
                data._id,
              )
              // console.log(cartList)
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}
