import { useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import './ProductsPage.css';

const categories = ['All', 'Electronics', 'Audio', 'Fashion', 'Wearables', 'Home'];

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="products-page">
      <div className="products-header">
        <div>
          <h1>Shop all products</h1>
          <p>Search by name, filter categories, and find the perfect item.</p>
        </div>
        <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="product-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? 'filter-button active' : 'filter-button'}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className="empty-state">No products match your search.</div>
        )}
      </div>
    </section>
  );
}

export default ProductsPage;
