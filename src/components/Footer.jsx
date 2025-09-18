import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">creXchange</span>
            </div>
            <p className="footer-description">
              Revolutionizing credit card benefits sharing with secure, 
              instant access to exclusive offers and discounts.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
            
            <div className="app-download">
              <h4 className="footer-title">Download Our App</h4>
              <div className="app-badges">
                <div className="app-badge">
                  <span>📱 Google Play</span>
                  <small>Coming Soon</small>
                </div>
                <div className="app-badge">
                  <span>🍎 App Store</span>
                  <small>Coming Soon</small>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Product</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How it Works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Stay Updated</h4>
            <p className="newsletter-text">Get early access and updates</p>
            <div className="newsletter-signup">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="btn btn-primary newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 creXchange. All rights reserved.</p>
          <p>Made with ❤️ for the credit card community</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer