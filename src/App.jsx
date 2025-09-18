import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustLogos from './components/TrustLogos.jsx'
import Features from './components/Features.jsx'
import UserTypes from './components/UserTypes.jsx'
import ForBanks from './components/ForBanks.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import Stats from './components/Stats.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TrustLogos />
      <Features />
      <UserTypes />
      <ForBanks />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Stats />
      <Footer />
    </div>
  )
}

export default App