import React, { useState, useEffect } from 'react';
import './HomePage.css';

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const features = [
    {
      icon: '🏝️',
      title: 'Tropical Paradise',
      description: 'Discover the most beautiful beaches and crystal-clear waters'
    },
    {
      icon: '🌺',
      title: 'Rich Culture',
      description: 'Immerse yourself in authentic Hawaiian traditions and history'
    },
    {
      icon: '🍍',
      title: 'Exotic Cuisine',
      description: 'Taste the unique flavors of traditional Hawaiian dishes'
    },
    {
      icon: '🌋',
      title: 'Volcanic Landscapes',
      description: 'Explore dramatic volcanic formations and natural wonders'
    }
  ];

  const stats = [
    { number: '137', label: 'Islands' },
    { number: '1.4M', label: 'Visitors Annually' },
    { number: '365', label: 'Days of Sunshine' },
    { number: '50+', label: 'Beaches' }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-image ${index === currentImage ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Hawaii</span>
          </h1>
          <p className="hero-subtitle">
            Experience the magic of the Pacific Islands with breathtaking landscapes, 
            rich culture, and unforgettable adventures
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Now</button>
            <button className="btn-secondary">Watch Video</button>
          </div>
        </div>
        <div className="hero-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Hawaii?</h2>
            <p>Discover what makes Hawaii the perfect destination for your next adventure</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Your Hawaiian Adventure?</h2>
            <p>Book your trip today and create memories that will last a lifetime</p>
            <div className="cta-buttons">
              <button className="btn-primary">Plan Your Trip</button>
              <button className="btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Get the latest news and offers delivered to your inbox</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
