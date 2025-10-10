import React, { useState } from 'react';
import './Nature.css';

export default function Nature() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Вся природа', icon: '🌺' },
    { id: 'beaches', name: 'Пляжі', icon: '🏖️' },
    { id: 'volcanoes', name: 'Вулкани', icon: '🌋' },
    { id: 'forests', name: 'Ліси', icon: '🌲' },
    { id: 'waterfalls', name: 'Водоспади', icon: '💧' },
    { id: 'wildlife', name: 'Тваринний світ', icon: '🐋' }
  ];

  const locations = [
    {
      id: 1,
      name: 'Пляж Вайкікі',
      category: 'beaches',
      description: 'Легендарний пляж з золотим піском та кристально чистою водою',
      rating: 4.9,
      reviews: 2847,
      image: 'https://usamagazine.ru/wp-content/uploads/2018/01/hawaii17-750x350.jpg',
      features: ['Серфінг', 'Плавання', 'Захід сонця', 'Ресторани'],
      bestTime: 'Цілий рік'
    },
    {
      id: 2,
      name: 'Вулкан Кілауеа',
      category: 'volcanoes',
      description: 'Один з найактивніших вулканів світу з дивовижними лавовими потоками',
      rating: 4.8,
      reviews: 1923,
      image: 'https://pravdatutnews.com/sites/default/files/news/2024/12/24/photo_5429254011707582533_y.jpg.webp',
      features: ['Лавові потоки', 'Кратер', 'Геологічні утворення', 'Нічні види'],
      bestTime: 'Цілий рік'
    },
    {
      id: 3,
      name: 'Національний парк Халеакала',
      category: 'volcanoes',
      description: 'Сплячий вулкан з унікальним кратером та фантастичними сходами сонця',
      rating: 4.9,
      reviews: 2156,
      image: 'https://www.tripsoul.ru/Destinations/IMG_NorthAmerica/USA/Haleakala/Haleakala_03_thumb_210x140.jpg',
      features: ['Схід сонця', 'Кратер', 'Походи', 'Астрономія'],
      bestTime: 'Ранок'
    },
    {
      id: 4,
      name: 'Тропічний ліс Хана',
      category: 'forests',
      description: 'Древній тропічний ліс з екзотичними рослинами та водоспадами',
      rating: 4.7,
      reviews: 1834,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Тропічні рослини', 'Птахи', 'Походи', 'Водоспади'],
      bestTime: 'Сухий сезон'
    },
    {
      id: 5,
      name: 'Водоспад Акака',
      category: 'waterfalls',
      description: 'Вражаючий 135-футовий водоспад серед тропічної рослинності',
      rating: 4.8,
      reviews: 1456,
      image: 'https://media.istockphoto.com/id/980374560/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%BE%D0%B4%D0%BE%D0%BF%D0%B0%D0%B4-%D0%B0%D0%BA%D0%B0%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=3O99YwkfXWof8R5YiB2O5a47jz99Ey7H1hQ9gHE-1vE=',
      features: ['Водоспад', 'Походи', 'Фото', 'Природа'],
      bestTime: 'Ранок'
    },
    {
      id: 6,
      name: 'Заповідник Хумпхуа',
      category: 'wildlife',
      description: 'Унікальний заповідник з рідкісними тропічними птахами та рослинами',
      rating: 4.6,
      reviews: 892,
      image: 'https://www.waikikiaquarium.org/wp-content/uploads/2013/11/reef-triggerfish_620.jpg',
      features: ['Птахи', 'Рослини', 'Екскурсії', 'Фото'],
      bestTime: 'Ранок'
    },
    {
      id: 7,
      name: 'Пляж Напалі',
      category: 'beaches',
      description: 'Дикий пляж з драматичними скелями та кристально чистою водою',
      rating: 4.9,
      reviews: 2234,
      image: 'data:image/jpeg;base64,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',
      features: ['Скелі', 'Плавання', 'Сноркелінг', 'Фото'],
      bestTime: 'Літо'
    },
    {
      id: 8,
      name: 'Океанічний заповідник',
      category: 'wildlife',
      description: 'Місце спостереження за горбатими китами та морськими черепахами',
      rating: 4.8,
      reviews: 1678,
      image: 'data:image/jpeg;base64,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',
      features: ['Кити', 'Черепахи', 'Дельфіни', 'Сноркелінг'],
      bestTime: 'Зима-Весна'
    }
  ];

  const activities = [
    {
      id: 1,
      name: 'Серфінг на Вайкікі',
      type: 'Водні види спорту',
      description: 'Навчіться серфінгу на легендарних хвилях Вайкікі',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1506905925346-04b8e0e7c4c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Похід до кратера Халеакала',
      type: 'Походи',
      description: 'Спробуйте піднятися на вершину сплячого вулкана',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1506905925346-04b8e0e7c4c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Сноркелінг з морськими черепахами',
      type: 'Підводне плавання',
      description: 'Пливіть разом з морськими черепахами в їх природному середовищі',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1506905925346-04b8e0e7c4c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredLocations = selectedCategory === 'all' 
    ? locations 
    : locations.filter(location => location.category === selectedCategory);

  return (
    <div className="nature-page">
      {/* Hero Section */}
      <section className="nature-hero">
        <div className="hero-content">
          <h1 className="hero-title">Природа Гаваїв</h1>
          <p className="hero-subtitle">
            Відкрийте дивовижну красу тропічної природи, вулканічних пейзажів та кристально чистих вод
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Островів</span>
            </div>
            <div className="stat">
              <span className="stat-number">5</span>
              <span className="stat-label">Національних парків</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.8</span>
              <span className="stat-label">Середня оцінка</span>
            </div>
          </div>
        </div>
      </section>

      {/* Nature Categories */}
      <section className="categories-section">
        <div className="container">
          <h2>Оберіть тип природи</h2>
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

      {/* Locations Grid */}
      <section className="locations-section">
        <div className="container">
          <div className="locations-grid">
            {filteredLocations.map(location => (
              <div key={location.id} className="location-card">
                <div className="location-image">
                  <img src={location.image} alt={location.name} />
                  <div className="location-rating">
                    <span className="stars">⭐</span>
                    <span className="rating">{location.rating}</span>
                    <span className="reviews">({location.reviews})</span>
                  </div>
                </div>
                <div className="location-content">
                  <div className="location-category">{location.bestTime}</div>
                  <h3 className="location-name">{location.name}</h3>
                  <p className="location-description">{location.description}</p>
                  <div className="location-features">
                    {location.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="location-footer">
                    <div className="location-time">Кращий час: {location.bestTime}</div>
                    <button className="visit-btn">Відвідати</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section">
        <div className="container">
          <h2>Природні активності</h2>
          <div className="activities-grid">
            {activities.map(activity => (
              <div key={activity.id} className="activity-card">
                <div className="activity-image">
                  <img src={activity.image} alt={activity.name} />
                  <div className="activity-rating">
                    <span className="stars">⭐</span>
                    <span className="rating">{activity.rating}</span>
                  </div>
                </div>
                <div className="activity-content">
                  <div className="activity-type">{activity.type}</div>
                  <h3 className="activity-name">{activity.name}</h3>
                  <p className="activity-description">{activity.description}</p>
                  <button className="book-btn">Забронювати</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nature Culture Section */}
      <section className="culture-section">
        <div className="container">
          <div className="culture-content">
            <div className="culture-text">
              <h2>Природна спадщина Гаваїв</h2>
              <p>
                Гаваї - це унікальний архіпелаг, створений вулканічною активністю протягом мільйонів років. 
                Кожен острів має свою особливу екосистему, від тропічних лісів до вулканічних пустель.
              </p>
              <div className="culture-features">
                <div className="feature">
                  <span className="feature-icon">🌋</span>
                  <div>
                    <h4>Вулканічне походження</h4>
                    <p>Острови створені підводними вулканами та мають унікальну геологію</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">🌺</span>
                  <div>
                    <h4>Ендемічні види</h4>
                    <p>Більше 90% рослин та тварин є унікальними для Гаваїв</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">🌊</span>
                  <div>
                    <h4>Морські екосистеми</h4>
                    <p>Багаті коралові рифи та різноманітний морський світ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="culture-image">
              <img src="https://images.unsplash.com/photo-1506905925346-04b8e0e7c4c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hawaiian Nature" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nature-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Готові дослідити природу Гаваїв?</h2>
            <p>Забронюйте екскурсії та активності в найкращих природних локаціях</p>
            <div className="cta-buttons">
              <button className="btn-primary">Забронювати екскурсію</button>
              <button className="btn-secondary">Подивитися активності</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
