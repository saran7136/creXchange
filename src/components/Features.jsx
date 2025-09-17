import React from 'react'

function Features() {
  const features = [
    {
      icon: '🔄',
      title: 'Smart Matching',
      description: 'Our AI matches you with the right cardholders for maximum savings on your favorite brands.'
    },
    {
      icon: '🛡️',
      title: 'Secure Transactions',
      description: 'Bank-grade security ensures your transactions are safe and your data is protected.'
    },
    {
      icon: '⚡',
      title: 'Instant Access',
      description: 'Get virtual card details instantly and start shopping with exclusive offers right away.'
    },
    {
      icon: '💰',
      title: 'Earn While Sharing',
      description: 'Card owners earn commission on every successful transaction while helping others save.'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Seamless experience across all devices with our responsive web and mobile apps.'
    },
    {
      icon: '🎯',
      title: 'Targeted Offers',
      description: 'Access specific merchant offers and seasonal discounts that match your shopping needs.'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose creXchange?</h2>
          <p className="section-description">
            Experience the future of credit card benefits sharing with our innovative platform
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features