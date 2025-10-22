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
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const culturalFeatures = [
    {
      icon: '🌺',
      title: 'Алоха Дух',
      hawaiianName: 'Ke Aloha',
      description: 'Відчуйте справжній дух Алоха - любов, милосердя та гармонію з природою'
    },
    {
      icon: '🏄‍♂️',
      title: 'Серфінг',
      hawaiianName: 'He\'e Nalu',
      description: 'Стародавнє мистецтво серфінгу, народжене на Гаваях тисячі років тому'
    },
    {
      icon: '🎵',
      title: 'Гула',
      hawaiianName: 'Hula',
      description: 'Священний танець, який розповідає історії предків та природи'
    },
    {
      icon: '🌋',
      title: 'Пеле',
      hawaiianName: 'Pele',
      description: 'Богиня вулканів, яка створила острови своєю божественною силою'
    },
    {
      icon: '🌿',
      title: 'Капа',
      hawaiianName: 'Kapa',
      description: 'Традиційна тканина з кори рослин, мистецтво яке передається поколіннями'
    },
    {
      icon: '🍃',
      title: 'Лей',
      hawaiianName: 'Lei',
      description: 'Квіткові намиста, символ привітання, любові та зв\'язку з природою'
    }
  ];

  const ancientWisdom = [
    {
      proverb: 'Ua Mau ke Ea o ka ʻĀina i ka Pono',
      translation: 'Життя землі зберігається в справедливості',
      meaning: 'Це означає, що земля процвітає, коли ми живемо в гармонії з природою'
    },
    {
      proverb: 'He aliʻi ka ʻāina; he kauwā ke kanaka',
      translation: 'Земля є вождем; людина є слугою',
      meaning: 'Ми повинні поважати та захищати землю, яка дає нам життя'
    },
    {
      proverb: 'Aʻohe pau ka ʻike i ka hālau hoʻokahi',
      translation: 'Вся мудрість не міститься в одній школі',
      meaning: 'Ми можемо вчитися у всіх людей та культур'
    }
  ];

  const culturalStats = [
    { number: '1,500+', label: 'років традицій', hawaiianLabel: 'makahiki' },
    { number: '137', label: 'островів', hawaiianLabel: 'mokupuni' },
    { number: '8', label: 'основних островів', hawaiianLabel: 'nā mokupuni nui' },
    { number: '365', label: 'днів Алоха', hawaiianLabel: 'lā aloha' }
  ];

  const culturalSections = [
    {
      title: 'Традиційні ремесла',
      hawaiianTitle: 'Hana Lima',
      description: 'Відкрийте древні мистецтва створення кано, ткацтва та різьби по дереву',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Виготовлення леї', 'Ткацтво капа', 'Різьба по дереву', 'Створення кано']
    },
    {
      title: 'Духовні практики',
      hawaiianTitle: 'Hoʻomana',
      description: 'Поглибтеся в духовні традиції та зв\'язок з природою та предками',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Медитація на природі', 'Церемонії благословення', 'Священні танці', 'Розмови з предками']
    },
    {
      title: 'Морська мудрість',
      hawaiianTitle: 'Moana',
      description: 'Навчіться читати зірки, хвилі та вітри, як це робили древні мореплавці',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Навігація по зірках', 'Розуміння хвиль', 'Читання вітрів', 'Рибальство традиційними методами']
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section with Hawaiian Cultural Elements */}
      <section className="hero">
        <div className="hawaiian-pattern-overlay"></div>
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
          <div className="hawaiian-greeting">
            <span className="aloha-text">Aloha</span>
            <span className="hawaiian-subtitle">E komo mai</span>
          </div>
          <h1 className="hero-title">
            Ласкаво просимо до <span className="hawaii-highlight">Гаваїв</span>
          </h1>
          <p className="hero-subtitle">
            Відкрийте для себе справжню магію островів з їх багатою культурною спадщиною, 
            древніми традиціями та незабутніми пригодами
          </p>
          <div className="hero-buttons">
            <a href="#booking" className="btn-primary" onClick={(e)=>e.stopPropagation()}>
              <span>Забронювати зараз</span>
              <span className="btn-icon">🗓️</span>
            </a>
            <button className="btn-secondary">
              <span>Дізнатися більше</span>
              <span className="btn-icon">🏄‍♂️</span>
            </button>
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

      {/* Cultural Stats Section */}
      <section className="cultural-stats">
        <div className="container">
          <div className="section-header">
            <h2 className="hawaiian-section-title">
              <span className="hawaiian-name">Nā Helu</span>
              <span className="section-subtitle">Культурні цифри</span>
            </h2>
          </div>
          <div className="stats-grid">
            {culturalStats.map((stat, index) => (
              <div key={index} className="cultural-stat-item">
                <div className="stat-decoration"></div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-hawaiian-label">{stat.hawaiianLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Features Section */}
      <section className="cultural-features">
        <div className="container">
          <div className="section-header">
            <h2 className="hawaiian-section-title">
              <span className="hawaiian-name">Nā Moʻomeheu</span>
              <span className="section-subtitle">Культурні скарби</span>
            </h2>
            <p>Відкрийте багату культурну спадщину Гаваїв та їх древні традиції</p>
          </div>
          <div className="cultural-features-grid">
            {culturalFeatures.map((feature, index) => (
              <div key={index} className="cultural-feature-card">
                <div className="feature-pattern"></div>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <h4 className="feature-hawaiian-name">{feature.hawaiianName}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ancient Wisdom Section */}
      <section className="ancient-wisdom">
        <div className="container">
          <div className="wisdom-content">
            <div className="wisdom-header">
              <h2 className="hawaiian-section-title">
                <span className="hawaiian-name">Nā ʻŌlelo Noʻeau</span>
                <span className="section-subtitle">Древня мудрість</span>
              </h2>
              <p>Традиційні гавайські прислів'я та їх глибокий зміст</p>
            </div>
            <div className="wisdom-grid">
              {ancientWisdom.map((wisdom, index) => (
                <div key={index} className="wisdom-card">
                  <div className="wisdom-pattern"></div>
                  <div className="wisdom-content-inner">
                    <h3 className="wisdom-proverb">{wisdom.proverb}</h3>
                    <p className="wisdom-translation">"{wisdom.translation}"</p>
                    <p className="wisdom-meaning">{wisdom.meaning}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Experiences Section */}
      <section className="cultural-experiences">
        <div className="container">
          <div className="section-header">
            <h2 className="hawaiian-section-title">
              <span className="hawaiian-name">Nā Hana</span>
              <span className="section-subtitle">Культурні досвіди</span>
            </h2>
            <p>Поглибтеся в автентичні гавайські традиції та практики</p>
          </div>
          <div className="cultural-sections-grid">
            {culturalSections.map((section, index) => (
              <div key={index} className="cultural-section-card">
                <div className="section-image">
                  <img src={section.image} alt={section.title} />
                  <div className="image-overlay"></div>
                </div>
                <div className="section-content">
                  <h3 className="section-title">{section.title}</h3>
                  <h4 className="section-hawaiian-title">{section.hawaiianTitle}</h4>
                  <p className="section-description">{section.description}</p>
                  <div className="activities-list">
                    {section.activities.map((activity, activityIndex) => (
                      <span key={activityIndex} className="activity-tag">
                        {activity}
                      </span>
                    ))}
                  </div>
                  <button className="learn-more-btn">
                    <span>Дізнатися більше</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural CTA Section */}
      <section className="cultural-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-pattern"></div>
            <h2 className="hawaiian-section-title">
              <span className="hawaiian-name">E Hōʻea Mai</span>
              <span className="section-subtitle">Приїжджайте до нас</span>
            </h2>
            <p>Готові відчути справжній дух Алоха та поглибитися в гавайську культуру?</p>
            <div className="cta-buttons">
              <a href="#booking" className="btn-primary" onClick={(e)=>e.stopPropagation()}>
                <span>Планувати подорож</span>
                <span className="btn-icon">✈️</span>
              </a>
              <a href="#sales" className="btn-outline" onClick={(e)=>e.stopPropagation()}>
                <span>Культурні тури</span>
                <span className="btn-icon">🌺</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hawaiian Newsletter Section */}
      <section className="hawaiian-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-pattern"></div>
            <h3 className="hawaiian-section-title">
              <span className="hawaiian-name">Nā Leka</span>
              <span className="section-subtitle">Новини</span>
            </h3>
            <p>Отримуйте останні новини про гавайську культуру та спеціальні пропозиції</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Ваша електронна адреса"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                <span>Підписатися</span>
                <span className="btn-icon">🌺</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
