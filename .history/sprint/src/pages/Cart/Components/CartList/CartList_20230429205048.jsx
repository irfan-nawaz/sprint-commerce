import CartCard from '../../../../components/Card/CartCard/CartCard'
import OrderSummaryCard from '../../../../components/Card/OrderSummaryCard/OrderSummaryCard'
import { useCart } from '../../../../context/cart/cartContext'
// import { products } from '../../../../backend/db/products'
import { useFilter } from '../../../../context/filter/filterContext'
// import './Cart.css'

export default function CartList() {
  const cartCards = useCart().cartList
  const filter = useFilter()
  console.log(cartCards)
  const totalPrice = 0
  return (
    <div className="display">
      <div className="items">
        {cartCards.map((data) => (
          <CartCard data={data} />
        ))}
        {/* {cartCards.map((data) => ( */}
        <OrderSummaryCard data={filter.filteredList} />
        {/* ))} */}
      </div>
    </div>
  )
}
