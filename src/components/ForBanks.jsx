import React from 'react'

function ForBanks() {
  return (
    <section id="for-banks" className="for-banks">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Partnership Opportunities for Banks</h2>
          <p className="section-description">
            Expand your card usage and customer engagement through our platform
          </p>
        </div>
        
        <div className="bank-benefits-grid">
          <div className="bank-benefit">
            <div className="benefit-icon">📈</div>
            <h3>Increased Card Usage</h3>
            <p>Drive more transactions through your premium cards with our sharing network</p>
          </div>
          
          <div className="bank-benefit">
            <div className="benefit-icon">🎯</div>
            <h3>Customer Acquisition</h3>
            <p>Attract new customers who experience your card benefits before applying</p>
          </div>
          
          <div className="bank-benefit">
            <div className="benefit-icon">🔒</div>
            <h3>Secure Platform</h3>
            <p>Bank-grade security ensures all transactions are safe and compliant</p>
          </div>
          
          <div className="bank-benefit">
            <div className="benefit-icon">💰</div>
            <h3>Revenue Sharing</h3>
            <p>Earn additional revenue from increased card utilization and new acquisitions</p>
          </div>
        </div>
        
        <div className="bank-cta">
          <button className="btn btn-primary btn-large">Partner With Us</button>
        </div>
      </div>
    </section>
  )
}

export default ForBanks