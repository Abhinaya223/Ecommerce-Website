import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import ImageWithFallback from '../components/ImageWithFallback';
import './ProductDetailsPage.css';

function ProductDetailsPage() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="product-details-page">
        <h2>Product not found</h2>
        <Link to="/products" className="secondary-button">Back to products</Link>
      </div>
    );
  }

  return (
    <section className="product-details-page">
      <div className="product-details-card">
        <ImageWithFallback src={product.image} alt={product.name} className="details-image" />
        <div className="details-info">
          <span className="product-category">{product.category}</span>
          <h1>{product.name}</h1>
          <div className="product-meta">
            <span className="product-price">${product.price}</span>
            <span className="product-rating">⭐ {product.rating}</span>
          </div>
          <p>{product.description}</p>
          <div className="details-actions">
            <button className="primary-button">Add to cart</button>
            <Link to="/checkout" className="secondary-button">Buy now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
