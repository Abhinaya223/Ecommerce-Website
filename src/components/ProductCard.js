import { Link } from 'react-router-dom';
import './ProductCard.css';
import ImageWithFallback from './ImageWithFallback';
import { useState } from 'react';

function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  function addToCart() {
    try {
      const raw = localStorage.getItem('shopCart');
      const cart = raw ? JSON.parse(raw) : [];
      const existing = cart.find((c) => c.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ id: product.id, qty: 1 });
      }
      localStorage.setItem('shopCart', JSON.stringify(cart));
      setAdded(true);
      setTimeout(() => setAdded(false), 1200);
    } catch (e) {
      console.error('Add to cart failed', e);
    }
  }

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-wrap">
        <ImageWithFallback src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-meta">
          <span className="product-price">${product.price}</span>
          <span className="product-rating">⭐ {product.rating}</span>
        </div>
        <button onClick={addToCart} className="add-to-cart-button">{added ? 'Added' : 'Add to cart'}</button>
      </div>
    </div>
  );
}

export default ProductCard;
