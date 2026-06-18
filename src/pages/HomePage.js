import { Link } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <section className="home-page">
      <div className="hero-banner">
        <div className="hero-copy">
          <span className="eyebrow">Best deals online</span>
          <h1>Discover your next purchase with ShopRush.</h1>
          <p>Shop trend-forward products, premium picks, and great offers for every category.</p>
          <div className="hero-actions">
            <Link to="/products" className="primary-button">Shop products</Link>
            <Link to="/cart" className="secondary-button">View cart</Link>
          </div>
        </div>
        <div className="hero-image" />
      </div>
      <div className="featured-section">
        <div className="section-header">
          <h2>Featured picks</h2>
          <Link to="/products">Browse all</Link>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
