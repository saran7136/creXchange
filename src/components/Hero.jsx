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
            <div className="card-stack">
              <div className="credit-card card-1">
                <div className="card-header">
                  <span className="card-type">HDFC Regalia</span>
                  <div className="card-chip"></div>
                </div>
                <div className="card-number">**** **** **** 4321</div>
                <div className="card-footer">
                  <span>JOHN DOE</span>
                  <span>12/26</span>
                </div>
              </div>
              <div className="credit-card card-2">
                <div className="card-header">
                  <span className="card-type">SBI Elite</span>
                  <div className="card-chip"></div>
                </div>
                <div className="card-number">**** **** **** 8765</div>
                <div className="card-footer">
                  <span>JANE SMITH</span>
                  <span>09/25</span>
                </div>
              </div>
              <div className="credit-card card-3">
                <div className="card-header">
                  <span className="card-type">ICICI Platinum</span>
                  <div className="card-chip"></div>
                </div>
                <div className="card-number">**** **** **** 1234</div>
                <div className="card-footer">
                  <span>ALEX KUMAR</span>
                  <span>03/27</span>
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