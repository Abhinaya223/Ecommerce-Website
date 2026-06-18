import { Link } from 'react-router-dom';
import './AuthPage.css';

function LoginPage() {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Welcome back</h1>
        <p>Login to continue shopping with ShopRush.</p>
        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>
          <button type="submit" className="primary-button">Login</button>
        </form>
        <p className="auth-footer">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
