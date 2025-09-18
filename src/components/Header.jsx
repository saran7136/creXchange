import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <span className="logo-text">creXchange</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="nav-link">How it Works</button>
            <button onClick={() => scrollToSection('for-users')} className="nav-link">For Users</button>
            <button onClick={() => scrollToSection('for-banks')} className="nav-link">For Banks</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
          </nav>

          <div className="header-actions">
            <button className="btn btn-outline">Sign In</button>
            <button className="btn btn-primary">Get Started</button>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header