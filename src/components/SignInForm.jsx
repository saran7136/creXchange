import React, { useState } from 'react'

function SignInForm({ onBack }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log('Sign in attempt:', formData)
  }

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-header">
          <button onClick={onBack} className="back-button">
            ← Back to Home
          </button>
          <div className="logo">
            <span className="logo-text">creXchange</span>
          </div>
        </div>

        <div className="signin-content">
          <div className="signin-form-container">
            <div className="signin-welcome">
              <h2>Welcome Back</h2>
              <p>Sign in to your creXchange account</p>
            </div>

            <div className="social-signin">
              <button className="social-btn google-btn">
                <span className="social-icon">🔍</span>
                Continue with Google
              </button>
              <button className="social-btn linkedin-btn">
                <span className="social-icon">💼</span>
                Continue with LinkedIn
              </button>
            </div>

            <div className="divider">
              <span>or</span>
            </div>

            <form onSubmit={handleSubmit} className="signin-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-options">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary signin-btn">
                Sign In
              </button>
            </form>

            <div className="signup-link">
              <p>Don't have an account? <a href="#">Sign up here</a></p>
            </div>
          </div>

          <div className="signin-visual">
            <div className="feature-highlight">
              <h3>Join thousands of users</h3>
              <div className="highlight-stats">
                <div className="highlight-stat">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Active Users</span>
                </div>
                <div className="highlight-stat">
                  <span className="stat-number">₹2.5Cr+</span>
                  <span className="stat-label">Total Savings</span>
                </div>
                <div className="highlight-stat">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
              <div className="security-badge">
                <span className="security-icon">🔒</span>
                <span>Bank-grade security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInForm