import React, { useState, useEffect } from 'react'

function Hero({ onGetStarted }) {
  const [currentCard, setCurrentCard] = useState(0)

  const cards = [
    {
      bank: 'HDFC',
      type: 'INFINIA',
      number: '**** **** **** 1234',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
      class: 'hdfc-card'
    },
    {
      bank: 'ICICI',
      type: 'SAPPHIRO',
      number: '**** **** **** 5678',
      gradient: 'linear-gradient(135deg, #4834d4 0%, #686de0 100%)',
      class: 'icici-card'
    },
    {
      bank: 'AXIS',
      type: 'MAGNUS',
      number: '**** **** **** 9012',
      gradient: 'linear-gradient(135deg, #ff9ff3 0%, #f368e0 100%)',
      class: 'axis-card'
    },
    {
      bank: 'SBI',
      type: 'ELITE',
      number: '**** **** **** 3456',
      gradient: 'linear-gradient(135deg, #3742fa 0%, #2f3542 100%)',
      class: 'sbi-card'
    },
    {
      bank: 'AMEX',
      type: 'PLATINUM',
      number: '**** ****** *7890',
      gradient: 'linear-gradient(135deg, #2ed573 0%, #1e90ff 100%)',
      class: 'amex-card'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [cards.length])

  const handleIndicatorClick = (index) => {
    setCurrentCard(index)
  }

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
            <div className="credit-cards-showcase">
              <div className="cards-container">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`credit-card ${card.class} ${index === currentCard ? 'active' : ''}`}
                    style={{ background: card.gradient }}
                  >
                    <div className="card-header">
                      <span className="bank-logo">{card.bank}</span>
                      <span className="card-type">{card.type}</span>
                    </div>
                    <div className="card-number">{card.number}</div>
                    <div className="card-footer">
                      <div className="card-holder">PREMIUM</div>
                      <div className="card-network">💳</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card-indicators">
                {cards.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${index === currentCard ? 'active' : ''}`}
                    onClick={() => handleIndicatorClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero