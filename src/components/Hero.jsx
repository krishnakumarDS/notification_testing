import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Digital Solutions That
            <span className="highlight"> Transform Your Business</span>
          </h1>
          <p className="hero-description">
            We are a leading technology company specializing in web development, 
            mobile applications, and innovative digital solutions that drive growth 
            and success for businesses worldwide.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="graphic-circle"></div>
            <div className="graphic-circle"></div>
            <div className="graphic-circle"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

