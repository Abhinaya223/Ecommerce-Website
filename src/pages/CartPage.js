import { Link } from 'react-router-dom';
import products from '../data/products';
import './CartPage.css';
import ImageWithFallback from '../components/ImageWithFallback';
import { useEffect, useState } from 'react';

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem('shopCart');
    const saved = raw ? JSON.parse(raw) : null;
    if (saved && saved.length) {
      const items = saved.map((c) => {
        const prod = products.find((p) => p.id === c.id);
        return { ...prod, qty: c.qty };
      }).filter(Boolean);
      setCart(items);
    } else {
      // default demo items
      const demo = products.slice(0, 2).map((p) => ({ ...p, qty: 1 }));
      setCart(demo);
    }
  }, []);

  useEffect(() => {
    const simple = cart.map((c) => ({ id: c.id, qty: c.qty }));
    localStorage.setItem('shopCart', JSON.stringify(simple));
  }, [cart]);

  function updateQty(id, delta) {
    setCart((prev) => prev.map((it) => it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it));
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((it) => it.id !== id));
  }

  const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <section className="cart-page">
      <h1>Your cart</h1>
      <div className="cart-layout">
        <div className="cart-items">
          {cart.length === 0 && <div className="empty-state">Your cart is empty.</div>}
          {cart.map((item) => (
            <div key={item.id} className="cart-item-card">
              <ImageWithFallback src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="muted">${item.price} each</p>
                <div className="cart-controls">
                  <div className="qty-controls">
                    <button onClick={() => updateQty(item.id, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
              <div className="cart-item-price">${item.price * item.qty}</div>
            </div>
          ))}
        </div>
        <aside className="cart-summary">
          <h2>Order summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>$15.00</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${(subtotal + 15).toFixed(2)}</span>
          </div>
          <div className="summary-actions">
            <Link to="/products" className="secondary-button">Continue shopping</Link>
            <Link to="/checkout" className="primary-button">Proceed to checkout</Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default CartPage;
