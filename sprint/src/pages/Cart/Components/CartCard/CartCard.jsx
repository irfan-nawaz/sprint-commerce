import React from 'react'

export default function CartCard({
  data: { _id, price, imgSrc, title, categoryName },
}) {
  return (
    <section class="product">
      <figure class="product-content">
        <img src={imgSrc} alt="shoes" />
        <figcaption>
          <h4>{categoryName}</h4>
          <h3>{title}</h3>
          <p>₹{price}</p>
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
