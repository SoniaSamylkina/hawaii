import React, { useState } from 'react';
import './Culture.css';

export default function Culture() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Вся культура', icon: '🌺' },
    { id: 'traditions', name: 'Традиції', icon: '🎭' },
    { id: 'music', name: 'Музика', icon: '🎵' },
    { id: 'dance', name: 'Танці', icon: '💃' },
    { id: 'art', name: 'Мистецтво', icon: '🎨' },
    { id: 'crafts', name: 'Ремесла', icon: '🛠️' }
  ];

  const culturalFeatures = [
    {
      id: 1,
      name: 'Хула танець',
      hawaiianName: 'Hula',
      category: 'dance',
      description: 'Священний танець, який розповідає історії предків, природи та богів',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      history: 'Хула виникла понад 1000 років тому як форма молитви та розповіді',
      significance: 'Кожен рух має глибоке значення та передає історії поколінь',
      practices: ['Kahiko (традиційна хула)', 'Auana (сучасна хула)', 'Оле (співана хула)']
    },
    {
      id: 2,
      name: 'Укулеле',
      hawaiianName: 'Ukulele',
      category: 'music',
      description: 'Традиційний гавайський струнний інструмент, символ островів',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      history: 'Завезений португальськими іммігрантами в 1879 році',
      significance: 'Символ гавайської музики та культури по всьому світу',
      practices: ['Традиційні пісні', 'Сучасна музика', 'Навчання гри']
    },
    {
      id: 3,
      name: 'Леї виготовлення',
      hawaiianName: 'Lei Making',
      category: 'crafts',
      description: 'Мистецтво створення квіткових намист з тропічних квітів',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      history: 'Традиція, що передається з покоління в покоління понад 1000 років',
      significance: 'Символ привітання, любові та зв\'язку з природою',
      practices: ['Плетіння з квітів', 'Сушка та збереження', 'Церемоніальне використання']
    },
    {
      id: 4,
      name: 'Капа тканина',
      hawaiianName: 'Kapa',
      category: 'crafts',
      description: 'Традиційна тканина з кори рослин, виготовлена вручну',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      history: 'Виготовлялася з кори рослин понад 1000 років',
      significance: 'Використовувалася для одягу, покривал та церемоній',
      practices: ['Збір кори', 'Обробка волокон', 'Фарбування природними барвниками']
    },
    {
      id: 5,
      name: 'Гавайська мова',
      hawaiianName: 'ʻŌlelo Hawaiʻi',
      category: 'traditions',
      description: 'Рідна мова гавайців, що відродилася в останні десятиліття',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      history: 'Заборонена в школах до 1980-х років, тепер активно відроджується',
      significance: 'Ключ до розуміння гавайської культури та традицій',
      practices: ['Вивчення мови', 'Традиційні пісні', 'Розповіді предків']
    },
    {
      id: 6,
      name: 'Петрогліфи',
      hawaiianName: 'Kiʻi Pōhaku',
      category: 'art',
      description: 'Древні наскельні малюнки, що розповідають історії предків',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      history: 'Створені понад 1000 років тому древніми гавайцями',
      significance: 'Священні символи, що зберігають мудрість предків',
      practices: ['Дослідження петрогліфів', 'Інтерпретація символів', 'Збереження пам\'яток']
    }
  ];

  const culturalEvents = [
    {
      id: 1,
      name: 'Меріе Монарх',
      hawaiianName: 'Merrie Monarch Festival',
      type: 'Фестиваль хули',
      description: 'Найпрестижніший фестиваль хули в світі',
      date: 'Квітень',
      location: 'Хіло, Гаваї',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Алоха Фестиваль',
      hawaiianName: 'Aloha Festivals',
      type: 'Культурний фестиваль',
      description: 'Місячне святкування гавайської культури',
      date: 'Вересень',
      location: 'Всі острови',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Кона Кава Фестиваль',
      hawaiianName: 'Kona Coffee Festival',
      type: 'Культурний фестиваль',
      description: 'Святкування гавайської кави та культури',
      date: 'Листопад',
      location: 'Кона, Гаваї',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredFeatures = selectedCategory === 'all' 
    ? culturalFeatures 
    : culturalFeatures.filter(feature => feature.category === selectedCategory);

  return (
    <div className="culture-page">
      {/* Hero Section */}
      <section className="culture-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hawaiian-name">Moʻomeheu</span>
            <span className="title-text">Гавайська культура</span>
          </h1>
          <p className="hero-subtitle">
            Поглибтеся в багату культурну спадщину Гаваїв та відкрийте древні традиції, 
            які живуть і сьогодні
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Оберіть категорію культури</h2>
          <div className="categories-grid">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Features Grid */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {filteredFeatures.map(feature => (
              <div key={feature.id} className="feature-card">
                <div className="feature-image">
                  <img src={feature.image} alt={feature.name} />
                  <div className="feature-overlay"></div>
                </div>
                <div className="feature-content">
                  <h3 className="feature-name">{feature.name}</h3>
                  <h4 className="feature-hawaiian-name">{feature.hawaiianName}</h4>
                  <p className="feature-description">{feature.description}</p>
                  
                  <div className="feature-details">
                    <div className="detail-item">
                      <span className="detail-label">Історія:</span>
                      <span className="detail-text">{feature.history}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Значення:</span>
                      <span className="detail-text">{feature.significance}</span>
                    </div>
                  </div>

                  <div className="practices-list">
                    {feature.practices.map((practice, index) => (
                      <span key={index} className="practice-tag">{practice}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Events Section */}
      <section className="events-section">
        <div className="container">
          <h2 className="section-title">
            <span className="hawaiian-name">Nā Hanana</span>
            <span className="title-text">Культурні події</span>
          </h2>
          <div className="events-grid">
            {culturalEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.name} />
                  <div className="event-date">{event.date}</div>
                </div>
                <div className="event-content">
                  <h3 className="event-name">{event.name}</h3>
                  <h4 className="event-hawaiian-name">{event.hawaiianName}</h4>
                  <div className="event-type">{event.type}</div>
                  <p className="event-description">{event.description}</p>
                  <div className="event-location">📍 {event.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Learning Section */}
      <section className="learning-section">
        <div className="container">
          <div className="learning-content">
            <h2 className="section-title">
              <span className="hawaiian-name">Aʻo</span>
              <span className="title-text">Вивчення культури</span>
            </h2>
            <p className="learning-description">
              Приєднуйтесь до наших культурних програм та дізнайтеся більше про 
              гавайські традиції від носіїв культури
            </p>
            <div className="learning-options">
              <div className="learning-option">
                <div className="option-icon">🎭</div>
                <h3>Мастер-класи хули</h3>
                <p>Навчіться традиційним танцям від майстрів</p>
              </div>
              <div className="learning-option">
                <div className="option-icon">🎵</div>
                <h3>Уроки укулеле</h3>
                <p>Освойте гавайський струнний інструмент</p>
              </div>
              <div className="learning-option">
                <div className="option-icon">🌺</div>
                <h3>Виготовлення леї</h3>
                <p>Створіть своє квіткове намисто</p>
              </div>
              <div className="learning-option">
                <div className="option-icon">🗣️</div>
                <h3>Вивчення мови</h3>
                <p>Освойте основи гавайської мови</p>
              </div>
            </div>
            <div className="learning-cta">
              <a href="#booking" className="btn-primary">
                <span>Записатися на заняття</span>
                <span className="btn-icon">📚</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
