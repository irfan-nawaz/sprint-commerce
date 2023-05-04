import CartCard from '../../../../components/Card/CartCard/CartCard'
import OrderSummaryCard from '../../../../components/Card/OrderSummaryCard/OrderSummaryCard'
import { useCart } from '../../../../context/cart/cartContext'
// import { products } from '../../../../backend/db/products'
import { useFilter } from '../../../../context/filter/filterContext'
import useFilteredProducts from '../../../../hooks/useFilteredProducts'
// import './Cart.css'

export default function CartList() {
  const cartCards = useCart().cartList
  const [result, products] = useFilteredProducts()
  console.log(cartCards)
  return (
    <div className="display">
      <div className="items">
        {cartCards.map((data) => (
          <CartCard data={data} />
        ))}
        {/* {cartCards.map((data) => ( */}
        <OrderSummaryCard data={result[0]} />
        {/* ))} */}
      </div>
    </div>
  )
}
