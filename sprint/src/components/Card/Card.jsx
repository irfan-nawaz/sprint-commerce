import React from 'react'
// import './Card.css'
import img from '../../assets/img/mensT1.jpg'

export default function RealCard() {
  return (
    <article className="card">
      <h4>Soft and Smooth</h4>
      <h3>Nike Air Max</h3>
      <img src={img} alt="shoe" />
      <div class="badges">
        <i class="fas fa-heart"></i>
      </div>
      <div class="banners hot-selling">
        <p>Hot</p>
        <i class="fas fa-fire"></i>
      </div>
      <div class="about">
        <h6 class="product-description">Sustainable Materials</h6>
        <p class="product-price">₹ 8,995</p>
        <span>available in colors</span>
        <div class="colors">
          <div class="blue-unit"></div>
          <div class="green-unit"></div>
          <div class="red-unit"></div>
        </div>
      </div>
      <p>
        <a href="https://add/link" target="_blank" rel="noreferrer">
          <button class="btn" id="default-btn">
            Add to Cart
          </button>
        </a>
      </p>
      <p>
        <a href="https://add/link" target="_blank" rel="noreferrer">
          <button class="btn btn-otl-default">Save to Wishlist</button>
        </a>
      </p>
    </article>
  )
}
