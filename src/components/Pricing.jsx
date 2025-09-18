import React from 'react'

function Pricing({ onGetStarted }) {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-description">
            Join our free beta and start saving or earning today
          </p>
        </div>
        
        <div className="pricing-cards">
          <div className="pricing-card featured">
            <div className="pricing-badge">Free Beta</div>
            <h3 className="pricing-title">For Everyone</h3>
            <div className="pricing-price">
              <span className="price">₹0</span>
              <span className="period">/month</span>
            </div>
            <div className="pricing-features">
              <div className="feature">✓ Unlimited card sharing requests</div>
              <div className="feature">✓ Instant virtual card access</div>
              <div className="feature">✓ Commission earnings for sharers</div>
              <div className="feature">✓ 24/7 customer support</div>
              <div className="feature">✓ Bank-grade security</div>
            </div>
            <button onClick={onGetStarted} className="btn btn-primary btn-large">Join Free Beta</button>
            <p className="pricing-note">No credit card required • Cancel anytime</p>
          </div>
        </div>
        
        <div className="pricing-faq">
          <h4>Why Free?</h4>
          <p>We're in beta phase and want to build the best possible experience with your feedback. Pricing will be introduced after we perfect the platform.</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing