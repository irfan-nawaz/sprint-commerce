import CartCard from '../../../../components/Card/CartCard/CartCard'
import OrderSummaryCard from '../../../../components/Card/OrderSummaryCard/OrderSummaryCard'
import { useCart } from '../../../../context/cart/cartContext'
import { products } from '../../../../backend/db/products'
// import './Cart.css'

export default function CartList() {
  const cartCards = useCart().cartList
  console.log(cartCards)
  const totalPrice = 0
  return (
    <div className="display">
      <div className="items">
        {cartCards.map((data) => (
          <CartCard data={data} />
        ))}
        {/* {cartCards.map((data) => ( */}
        <OrderSummaryCard data={products[0]} />
        {/* ))} */}
      </div>
    </div>
  )
}
