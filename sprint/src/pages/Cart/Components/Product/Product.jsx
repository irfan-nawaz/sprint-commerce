import React from 'react'
import img from '../../../../assets/img/mensT1.jpg'

export default function Product() {
  return (
    <section class="product">
      <figure class="product-content">
        <img src={img} alt="shoes" />
        <figcaption>
          <h4>Soft and Smooth</h4>
          <h3>Nike Air Max</h3>
          <p>₹4999</p>
          <div class="order-details">
            <h5>Qty: </h5>
            <i class="fas fa-plus" onclick="button1()"></i>
            <span id="value"></span>
            <i class="fas fa-minus" onclick="button2()"></i>
          </div>
          <p>
            <a href="https://add/link" target="_blank" rel="noreferrer">
              <button class="btn" id="default-btn">
                Remove From Cart
              </button>
            </a>
          </p>
          <p>
            <a href="https://add/link" target="_blank" rel="noreferrer">
              <button class="btn btn-otl-default">Move To Wishlist</button>
            </a>
          </p>
        </figcaption>
      </figure>
    </section>
  )
}
