import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>ShopRush</h3>
          <p>Modern shopping experience inspired by top e-commerce platforms.</p>
        </div>
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
          <div className="footer-col">
            <h4>Follow us</h4>
            <div className="social-links">
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2026 ShopRush. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
