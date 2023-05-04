import CartCard from '../../../../components/Card/CartCard/CartCard'
import OrderSummaryCard from '../../../../components/Card/OrderSummaryCard/OrderSummaryCard'
import { useCart } from '../../../../context/cart/cartContext'
import useFilteredProducts from '../../../../hooks/useFilteredProducts'

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
