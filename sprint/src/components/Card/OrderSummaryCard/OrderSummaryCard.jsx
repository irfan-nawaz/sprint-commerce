export default function OrderSummaryCard() {
  return (
    <div className="summary">
      <section class="order">
        <h3>Price Details</h3>
        <hr />
        <div className="amounts">
          <p>Price (3 items)</p>
          <p>₹3499</p>
        </div>
        <div className="amounts">
          <p>Delivery Charges</p>
          <p>₹499</p>
        </div>
        <hr />
        <div className="amounts">
          <h5>Total Amount</h5>
          <h5>₹11,054</h5>
        </div>

        <p>
          <button class="btn" id="primary">
            Proceed to Buy
          </button>
        </p>
      </section>
    </div>
  )
}
