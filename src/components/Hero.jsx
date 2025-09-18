import React from 'react'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Share Credit Card Benefits,
              <span className="gradient-text"> Earn Together</span>
            </h1>
            <p className="hero-description">
              Connect with others to share exclusive credit card offers and discounts. 
              Get access to premium benefits without owning every card.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-large">
                Start Sharing
              </button>
              <button className="btn btn-outline btn-large">
                Learn More
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat">
                <span className="stat-number">₹50L+</span>
                <span className="stat-label">Savings Generated</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Card Types</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="demo-mockup">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="demo-step active">
                    <div className="step-header">
                      <span className="step-icon">🔍</span>
                      <span className="step-title">Request Offer</span>
                    </div>
                    <div className="demo-content">
                      <div className="offer-card">
                        <span>Amazon 20% off</span>
                        <span>Need HDFC Infinia</span>
                      </div>
                    </div>
                  </div>
                  <div className="demo-step">
                    <div className="step-header">
                      <span className="step-icon">🤝</span>
                      <span className="step-title">Get Matched</span>
                    </div>
                    <div className="demo-content">
                      <div className="match-card">
                        <span>Matched with Priya</span>
                        <span>HDFC Infinia holder</span>
                      </div>
                    </div>
                  </div>
                  <div className="demo-step">
                    <div className="step-header">
                      <span className="step-icon">💳</span>
                      <span className="step-title">Virtual Card</span>
                    </div>
                    <div className="demo-content">
                      <div className="virtual-card">
                        <span>**** 1234</span>
                        <span>Valid: 24hrs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero