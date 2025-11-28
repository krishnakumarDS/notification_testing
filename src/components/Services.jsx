import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices for optimal performance and user experience.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create seamless user experiences and drive conversions.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to support your business growth and digital transformation.'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure data privacy.'
    },
    {
      icon: '📊',
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to increase brand visibility and drive qualified leads.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

