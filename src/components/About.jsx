import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Dot Com Infoway</h2>
            <p className="about-description">
              Dot Com Infoway is a leading technology company with a proven track record 
              of delivering innovative digital solutions. We combine cutting-edge technology 
              with creative thinking to help businesses thrive in the digital age.
            </p>
            <p className="about-description">
              Our team of experienced developers, designers, and strategists work together 
              to create solutions that not only meet but exceed our clients' expectations. 
              We are committed to excellence, innovation, and building long-term partnerships 
              with our clients.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">200+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-graphic">
              <div className="graphic-box"></div>
              <div className="graphic-box"></div>
              <div className="graphic-box"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

