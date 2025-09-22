import React from 'react'

function TrustLogos() {
  const partners = [
    { 
      name: 'HDFC Bank', 
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg',
      fallbackUrl: 'https://logos-world.net/wp-content/uploads/2021/02/HDFC-Bank-Logo.png'
    },
    { 
      name: 'ICICI Bank', 
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
      fallbackUrl: 'https://logos-world.net/wp-content/uploads/2021/02/ICICI-Bank-Logo.png'
    },
    { 
      name: 'SBI', 
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg',
      fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/500px-SBI-logo.svg.png'
    },
    { 
      name: 'Axis Bank', 
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg",
      fallbackUrl: 'https://logos-world.net/wp-content/uploads/2021/02/Axis-Bank-Logo.png'
    },
    { 
      name: 'Amazon', 
      logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png',
      fallbackUrl: 'https://companieslogo.com/img/orig/AMZN-0d1f2c3e.png'
    },
    { 
      name: 'Flipkart', 
      logoUrl: 'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png',
      fallbackUrl: 'https://companieslogo.com/img/orig/FLPKRT-1a2b3c4d.png'
    }
  ]

  const mediaLogos = [
    'TechCrunch',
    'YourStory',
    'Economic Times',
    'Mint'
  ]

  const handleImageError = (e, fallbackUrl) => {
    if (e.target.src !== fallbackUrl) {
      e.target.src = fallbackUrl;
    } else {
      // If fallback also fails, hide image and show text
      e.target.style.display = 'none';
      e.target.nextElementSibling.style.display = 'block';
    }
  }

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-content">
          <div className="partners-section">
            <h4 className="trust-title">Trusted Partners</h4>
            <div className="logos-grid">
              {partners.map((partner, index) => (
                <div key={index} className="logo-card">
                  <div className="logo-container">
                    <img 
                      src={partner.logoUrl}
                      alt={`${partner.name} logo`}
                      className="partner-logo-img"
                      onError={(e) => handleImageError(e, partner.fallbackUrl)}
                    />
                    <div className="logo-fallback" style={{display: 'none'}}>
                      {partner.name}
                    </div>
                  </div>
  
                  
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