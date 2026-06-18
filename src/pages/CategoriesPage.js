import { Link } from 'react-router-dom';
import './CategoriesPage.css';

const categories = ['Electronics', 'Audio', 'Fashion', 'Wearables', 'Home'];

function CategoriesPage() {
  return (
    <section className="categories-page">
      <div className="categories-card">
        <h1>Categories</h1>
        <div className="categories-list">
          {categories.map((c) => (
            <Link key={c} to={`/products`} className="category-pill">{c}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesPage;
