import React from 'react'

function UserTypes() {
  return (
    <section id="for-users" className="user-types">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Choose Your Role</h2>
          <p className="section-description">
            Whether you want to save money or earn from your cards, we've got you covered
          </p>
        </div>
        
        <div className="user-types-grid">
          <div className="user-type-card">
            <div className="user-icon">🛍️</div>
            <h3 className="user-title">For Borrowers</h3>
            <div className="user-benefits">
              <div className="benefit">✓ Access premium card offers without owning cards</div>
              <div className="benefit">✓ Save up to 30% on your favorite brands</div>
              <div className="benefit">✓ Instant virtual card access</div>
              <div className="benefit">✓ No annual fees or hidden charges</div>
            </div>
            <div className="why-join">
              <strong>Why join now?</strong>
              <p>Get instant access to premium card offers without the hassle of owning multiple cards</p>
            </div>
            <button className="btn btn-primary user-cta">Register as Borrower</button>
          </div>

          <div className="user-type-card">
            <div className="user-icon">💳</div>
            <h3 className="user-title">For Card Sharers</h3>
            <div className="user-benefits">
              <div className="benefit">✓ Earn commission on every transaction</div>
              <div className="benefit">✓ Help others while making money</div>
              <div className="benefit">✓ Complete control over sharing limits</div>
              <div className="benefit">✓ Bank-grade security for all transactions</div>
            </div>
            <div className="why-join">
              <strong>Why join now?</strong>
              <p>Sharers earn commissions from day 1 and help build a community of smart spenders</p>
            </div>
            <button className="btn btn-primary user-cta">Register as Sharer</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserTypes