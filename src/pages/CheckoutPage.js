import './CheckoutPage.css';

function CheckoutPage() {
  return (
    <section className="checkout-page">
      <div className="checkout-card">
        <div className="checkout-summary">
          <h1>Checkout</h1>
          <div className="checkout-row">
            <label>
              Full name
              <input type="text" placeholder="John Doe" />
            </label>
            <label>
              Email address
              <input type="email" placeholder="john@example.com" />
            </label>
          </div>
          <label>
            Shipping address
            <input type="text" placeholder="123 Main Street" />
          </label>
          <div className="checkout-row">
            <label>
              City
              <input type="text" placeholder="New York" />
            </label>
            <label>
              Postal code
              <input type="text" placeholder="10001" />
            </label>
          </div>
          <label>
            Payment method
            <select>
              <option>Credit card</option>
              <option>Debit card</option>
              <option>UPI</option>
            </select>
          </label>
          <button className="primary-button">Place order</button>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;
