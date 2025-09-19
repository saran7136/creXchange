import React from 'react'
import CreditCardShowcase from './CreditCardShowcase'

function Hero({ onGetStarted }) {
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
              <button onClick={onGetStarted} className="btn btn-primary btn-large">
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
            <CreditCardShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero