import { SignInButton } from '@clerk/clerk-react'
import React from 'react'

const AuthPage = () => {
  return (
    <div className='auth-container'>
      <div className="auth-left">
        <div className="auth-hero">
          <div className="brand container">
            <img src="/slack-logo.png" className='brand-logo'/>
            <span className="brand-name">EMni</span>
          </div>

          <h1 className="hero-title">
            Welcome to work
          </h1>

          <p className='hero-subtitle'>Connect with yourr team secure and real time mesagin.</p>

          <div className="features-list">
                <div className='feature-item'>
                  <span className='feature-icon'>💬</span>
                  <span >Real time chat</span>
                </div>
                <div className="feature-item">
                  <span className='feature icon'>📽️</span>
                  <span>Video call and meeting</span>
                </div>

                <div className="feature-item">
                  <span className='feature icon'>🔒</span>
                  <span>Secure and Private</span>
                </div>
          </div>

    <SignInButton></SignInButton>


        </div>
      </div>
    </div>
  )
}

export default AuthPage