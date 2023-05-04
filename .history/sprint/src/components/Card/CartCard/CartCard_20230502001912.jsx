import { useCart } from '../../../../context/cart/cartContext'
import { useWishList } from '../../../context/wishList/wishListContext'
import StarsRating from 'react-star-rate'
import './CartCard.css'

export default function CartCard({
  data: { _id, price, imgSrc, title, categoryName, rating },
}) {
  const addToWishList = useWishList()
  const {}
  return (
    // cartList.map(data)
    <section className="item">
      <figure className="figure">
        <img src={imgSrc} alt="shoes" />
        <figcaption>
          <h3>{title}</h3>
          <h5 class="product-description">{categoryName}</h5>
          <p>{<StarsRating classNamePrefix="size" value={rating} />}</p>
          <h5>Price: ₹{price}</h5>
          <div class="order-details">
            <h5>Qty: </h5>
            <i class="fas fa-plus" onClick="button1()"></i>
            <span id="value"></span>
            <i class="fas fa-minus" onClick="button2()"></i>
          </div>
        </figcaption>
        <div className="cart-buttons">
          <button class="btn float">
            <span class="material-icons-outlined">close</span>
          </button>
          <button onClick={} class="btn float" id="default-btn">
            <span
              class="far fa-heart"
              style={{ color: 'white' }}
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
            ></span>
          </button>
        </div>
      </figure>
    </section>
  )
}
