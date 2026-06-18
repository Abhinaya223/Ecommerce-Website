import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-logo">ShopRush</Link>
      </div>
      <nav className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
        <NavLink to="/categories" className={({ isActive }) => isActive ? 'active' : ''}>Categories</NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : ''}>Cart</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
        <NavLink to="/register" className={({ isActive }) => isActive ? 'active' : ''}>Register</NavLink>
      </nav>
      <div className="navbar-actions">
        <Link to="/cart" className="cart-button">Cart</Link>
      </div>
    </header>
  );
}

export default Navbar;
