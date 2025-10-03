import React, { useState } from 'react';
import './Sales.css';

export default function Sales() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Всі тури', icon: '🌺' },
    { id: 'beach', name: 'Пляжні тури', icon: '🏖️' },
    { id: 'adventure', name: 'Пригоди', icon: '🏄‍♂️' },
    { id: 'culture', name: 'Культура', icon: '🎭' },
    { id: 'luxury', name: 'Люкс', icon: '💎' }
  ];

  const tours = [
    {
      id: 1,
      title: 'Класичний тур по Гаваях',
      category: 'beach',
      duration: '7 днів',
      price: 2500,
      originalPrice: 3000,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 127,
      features: ['Проживання 4*', 'Харчування', 'Екскурсії', 'Трансфер'],
      description: 'Повний тур по найкращим місцям Гаваїв з професійним гідом'
    },
    {
      id: 2,
      title: 'Екстремальні пригоди',
      category: 'adventure',
      duration: '5 днів',
      price: 1800,
      originalPrice: 2200,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviews: 89,
      features: ['Серфінг', 'Дайвінг', 'Скелелазіння', 'Каякінг'],
      description: 'Для любителів адреналіну та активного відпочинку'
    },
    {
      id: 3,
      title: 'Культурний тур',
      category: 'culture',
      duration: '6 днів',
      price: 2200,
      originalPrice: 2600,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviews: 95,
      features: ['Музеї', 'Традиційні церемонії', 'Місцева кухня', 'Історичні місця'],
      description: 'Поглиблене знайомство з гавайською культурою та традиціями'
    },
    {
      id: 4,
      title: 'Люкс відпочинок',
      category: 'luxury',
      duration: '10 днів',
      price: 5500,
      originalPrice: 6500,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5.0,
      reviews: 43,
      features: ['Проживання 5*', 'Приватний гід', 'VIP сервіс', 'Хелікоптер'],
      description: 'Ексклюзивний тур з найвищим рівнем комфорту'
    },
    {
      id: 5,
      title: 'Сімейний тур',
      category: 'beach',
      duration: '8 днів',
      price: 3200,
      originalPrice: 3800,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 156,
      features: ['Дитячі програми', 'Сімейні номери', 'Безпека', 'Розваги'],
      description: 'Ідеальний тур для сімей з дітьми різного віку'
    },
    {
      id: 6,
      title: 'Романтичний тур',
      category: 'luxury',
      duration: '5 днів',
      price: 2800,
      originalPrice: 3200,
      image: 'https://goldenbeach.ru/wp-content/uploads/2021/08/92.jpg',
      reviews: 78,
      features: ['Романтичні вечері', 'SPA', 'Приватні пляжі', 'Фотосесія'],
      description: 'Незвичайний тур для пар та молодят'
    }
  ];

  const filteredTours = selectedCategory === 'all' 
    ? tours 
    : tours.filter(tour => tour.category === selectedCategory);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('uk-UA', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleBookNow = (tour) => {
    // Here you would typically open a booking modal or redirect to booking page
    alert(`Бронювання туру: ${tour.title}`);
  };

  return (
    <div className="sales-page">
      {/* Hero Section */}
      <section className="sales-hero">
        <div className="hero-content">
          <h1 className="hero-title">Продажі турів по Гаваях</h1>
          <p className="hero-subtitle">
            Відкрийте для себе магію Тихого океану з нашими ексклюзивними турами
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Задоволених клієнтів</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Унікальних турів</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Середня оцінка</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="categories-section">
        <div className="container">
          <h2>Оберіть тип туру</h2>
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

      {/* Tours Grid */}
      <section className="tours-section">
        <div className="container">
          <div className="tours-grid">
            {filteredTours.map(tour => (
              <div key={tour.id} className="tour-card">
                <div className="tour-image">
                  <img src={tour.image} alt={tour.title} />
                  <div className="tour-badge">
                    <span className="discount">
                      -{Math.round((1 - tour.price / tour.originalPrice) * 100)}%
                    </span>
                  </div>
                  <div className="tour-rating">
                    <span className="stars">⭐</span>
                    <span className="rating">{tour.rating}</span>
                    <span className="reviews">({tour.reviews})</span>
                  </div>
                </div>
                <div className="tour-content">
                  <div className="tour-category">{categories.find(c => c.id === tour.category)?.name}</div>
                  <h3 className="tour-title">{tour.title}</h3>
                  <p className="tour-description">{tour.description}</p>
                  <div className="tour-duration">⏱️ {tour.duration}</div>
                  <div className="tour-features">
                    {tour.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="tour-pricing">
                    <div className="price-current">{formatPrice(tour.price)}</div>
                    <div className="price-original">{formatPrice(tour.originalPrice)}</div>
                  </div>
                  <button 
                    className="book-btn"
                    onClick={() => handleBookNow(tour)}
                  >
                    Забронювати зараз
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="offers-section">
        <div className="container">
          <h2>Спеціальні пропозиції</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <div className="offer-icon">🎁</div>
              <h3>Раннє бронювання</h3>
              <p>Знижка до 20% при бронюванні за 3 місяці</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">👥</div>
              <h3>Групові тури</h3>
              <p>Додаткова знижка для груп від 6 осіб</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">💳</div>
              <h3>Розстрочка</h3>
              <p>Можливість оплати частинами без відсотків</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Потрібна консультація?</h2>
            <p>Наші експерти допоможуть підібрати ідеальний тур для вас</p>
            <div className="cta-buttons">
              <button className="btn-primary">Зв'язатися з нами</button>
              <button className="btn-secondary">Зателефонувати</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}