import React from 'react'

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
            <div className="credit-cards-container">
              <div className="credit-card-carousel">
                <div className="credit-card active" data-bank="hdfc">
                  <div className="card-content">
                    <div className="card-header">
                      <span className="bank-name">HDFC</span>
                      <div className="card-chip"></div>
                    </div>
                    <div className="card-number">**** **** **** 1234</div>
                    <div className="card-footer">
                      <div className="card-holder">INFINIA</div>
                      <div className="card-type">PREMIUM</div>
                    </div>
                  </div>
                </div>
                <div className="credit-card" data-bank="icici">
                  <div className="card-content">
                    <div className="card-header">
                      <span className="bank-name">ICICI</span>
                      <div className="card-chip"></div>
                    </div>
                    <div className="card-number">**** **** **** 5678</div>
                    <div className="card-footer">
                      <div className="card-holder">SAPPHIRO</div>
                      <div className="card-type">PREMIUM</div>
                    </div>
                  </div>
                </div>
                <div className="credit-card" data-bank="axis">
                  <div className="card-content">
                    <div className="card-header">
                      <span className="bank-name">AXIS</span>
                      <div className="card-chip"></div>
                    </div>
                    <div className="card-number">**** **** **** 9012</div>
                    <div className="card-footer">
                      <div className="card-holder">MAGNUS</div>
                      <div className="card-type">PREMIUM</div>
                    </div>
                  </div>
                </div>
                <div className="credit-card" data-bank="sbi">
                  <div className="card-content">
                    <div className="card-header">
                      <span className="bank-name">SBI</span>
                      <div className="card-chip"></div>
                    </div>
                    <div className="card-number">**** **** **** 3456</div>
                    <div className="card-footer">
                      <div className="card-holder">ELITE</div>
                      <div className="card-type">PREMIUM</div>
                    </div>
                  </div>
                </div>
                <div className="credit-card" data-bank="amex">
                  <div className="card-content">
                    <div className="card-header">
                      <span className="bank-name">AMEX</span>
                      <div className="card-chip"></div>
                    </div>
                    <div className="card-number">**** ****** *7890</div>
                    <div className="card-footer">
                      <div className="card-holder">PLATINUM</div>
                      <div className="card-type">PREMIUM</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-indicators">
                <span className="indicator active" data-card="0"></span>
                <span className="indicator" data-card="1"></span>
                <span className="indicator" data-card="2"></span>
                <span className="indicator" data-card="3"></span>
                <span className="indicator" data-card="4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero