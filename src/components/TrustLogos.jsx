import React from 'react'

function TrustLogos() {
  const partners = [
    { name: 'HDFC Bank', logo: 'HDFC' },
    { name: 'ICICI Bank', logo: 'ICICI' },
    { name: 'SBI', logo: 'SBI' },
    { name: 'Amazon', logo: 'Amazon' },
    { name: 'Flipkart', logo: 'Flipkart' },
    { name: 'Swiggy', logo: 'Swiggy' }
  ]

  const mediaLogos = [
    'TechCrunch',
    'YourStory',
    'Economic Times',
    'Mint'
  ]

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-content">
          <div className="partners-section">
            <h4 className="trust-title">Trusted Partners</h4>
            <div className="logos-grid">
              {partners.map((partner, index) => (
                <div key={index} className="logo-card">
                  <span className="logo-text">{partner.logo}</span>
                  <span className="coming-soon">Coming Soon</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="media-section">
            <h4 className="trust-title">As Seen In</h4>
            <div className="media-logos">
              {mediaLogos.map((media, index) => (
                <div key={index} className="media-logo">
                  <span>{media}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustLogos