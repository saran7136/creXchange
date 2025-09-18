import React from 'react'

function Testimonials() {
  const testimonials = [
    {
      type: 'Borrower',
      name: 'Ravi Kumar',
      location: 'Mumbai',
      story: 'I saved ₹5,000 on my Flipkart shopping using an HDFC Infinia card through creXchange. The process was seamless and I got the discount instantly!',
      savings: '₹5,000 saved',
      avatar: '👨‍💼'
    },
    {
      type: 'Sharer',
      name: 'Priya Sharma',
      location: 'Bangalore',
      story: 'I earned ₹2,000 last month by sharing my Axis Magnus card with other users. It\'s a great way to help others while earning passive income.',
      savings: '₹2,000 earned',
      avatar: '👩‍💻'
    },
    {
      type: 'Borrower',
      name: 'Amit Patel',
      location: 'Delhi',
      story: 'Got access to premium dining offers through someone\'s American Express card. Saved 40% on my anniversary dinner without owning the card!',
      savings: '40% discount',
      avatar: '👨‍🍳'
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Real Stories from Our Community</h2>
          <p className="section-description">
            See how creXchange is helping people save money and earn income
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-location">{testimonial.location}</p>
                  <span className={`testimonial-type ${testimonial.type.toLowerCase()}`}>
                    {testimonial.type}
                  </span>
                </div>
              </div>
              <p className="testimonial-story">"{testimonial.story}"</p>
              <div className="testimonial-result">
                <span className="result-badge">{testimonial.savings}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials