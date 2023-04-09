import React from 'react'

export default function Order() {
  return (
    <section class="order">
      <h3>Product Details</h3>
      <hr />
      <div class="order-details">
        <p>Price:</p>
        <p>₹4999</p>
      </div>
      <div class="order-details">
        <p>Discount:</p>
        <p>₹1999</p>
      </div>
      <div class="order-details">
        <p>Delivery charges:</p>
        <p>₹499</p>
      </div>
      <hr />
      <div class="order-details">
        <h3>Total:</h3>
        <h3>₹3499</h3>
      </div>
      <hr />
      <p>You save ₹1999</p>
      <p>
        <a href="https://add/link" target="_blank" rel="noreferrer">
          <button class="btn" id="primary">
            Buy now
          </button>
        </a>
      </p>
    </section>
  )
}
