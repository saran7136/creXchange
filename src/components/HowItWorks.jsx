import React from 'react'

function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Request an Offer',
      description: 'Browse available offers or request access to specific credit card benefits for your desired merchant.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Get Matched',
      description: 'Our system instantly matches you with verified cardholders who have the benefits you need.',
      icon: '🤝'
    },
    {
      step: '03',
      title: 'Receive Virtual Card',
      description: 'Get secure virtual card details with spending limits and validity period for your transaction.',
      icon: '💳'
    },
    {
      step: '04',
      title: 'Shop & Save',
      description: 'Complete your purchase with exclusive discounts while the cardholder earns commission.',
      icon: '🛒'
    }
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            Get started in just 4 simple steps and unlock exclusive savings
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h3 className="cta-title">Ready to start saving?</h3>
          <button className="btn btn-primary btn-large">Join creXchange Today</button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks