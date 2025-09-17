import React from 'react'

function Stats() {
  const stats = [
    {
      number: '50,000+',
      label: 'Happy Users',
      description: 'Trust our platform for their credit card sharing needs'
    },
    {
      number: '₹2.5Cr+',
      label: 'Total Savings',
      description: 'Generated for our community members'
    },
    {
      number: '1,000+',
      label: 'Card Types',
      description: 'Available across all major banks and merchants'
    },
    {
      number: '99.9%',
      label: 'Success Rate',
      description: 'Successful transactions with zero fraud incidents'
    }
  ]

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats