import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustLogos from './components/TrustLogos.jsx'
import Features from './components/Features.jsx'
import UserTypeSelection from './components/UserTypeSelection.jsx'
import SignInForm from './components/SignInForm.jsx'
import ForBanks from './components/ForBanks.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import Stats from './components/Stats.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleGetStarted = () => {
    setCurrentPage('userSelection')
  }

  const handleSignIn = () => {
    setCurrentPage('signIn')
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
  }

  if (currentPage === 'userSelection') {
    return (
      <div className="App">
        <UserTypeSelection onBack={handleBackToHome} />
      </div>
    )
  }

  if (currentPage === 'signIn') {
    return (
      <div className="App">
        <SignInForm onBack={handleBackToHome} />
      </div>
    )
  }

  return (
    <div className="App">
      <Header onGetStarted={handleGetStarted} onSignIn={handleSignIn} />
      <Hero onGetStarted={handleGetStarted} />
      <TrustLogos />
      <Features />
      <ForBanks />
      <HowItWorks onGetStarted={handleGetStarted} />
      <Testimonials />
      <Pricing onGetStarted={handleGetStarted} />
      <Stats />
      <Footer />
    </div>
  )
}

export default App