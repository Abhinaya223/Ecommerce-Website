import { Link } from 'react-router-dom';
import './AuthPage.css';

function RegisterPage() {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Create account</h1>
        <p>Register and start exploring the best deals.</p>
        <form className="auth-form">
          <label>
            Full name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Choose a password" />
          </label>
          <button type="submit" className="primary-button">Register</button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
