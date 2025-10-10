import React, { useState } from 'react';
import './Food.css';

export default function Food() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Вся їжа', icon: '🍽️' },
    { id: 'traditional', name: 'Традиційна', icon: '🌺' },
    { id: 'seafood', name: 'Морепродукти', icon: '🐟' },
    { id: 'street', name: 'Вулична їжа', icon: '🌮' },
    { id: 'desserts', name: 'Десерти', icon: '🍰' },
    { id: 'drinks', name: 'Напої', icon: '🥥' }
  ];

  const dishes = [
    {
      id: 1,
      name: 'Поке Боул',
      category: 'traditional',
      description: 'Традиційна гавайська страва з сирої риби, рису та овочів',
      price: '$18',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ingredients: ['Тунець', 'Рис', 'Авокадо', 'Морква', 'Водорості'],
      origin: 'Гавайська традиція'
    },
    {
      id: 2,
      name: 'Лау Лау',
      category: 'traditional',
      description: 'Свинина, загорнута в листя таро та приготовлена на пару',
      price: '$22',
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ingredients: ['Свинина', 'Листя таро', 'Рибний соус', 'Імбир'],
      origin: 'Полінезійська кухня'
    },
    {
      id: 3,
      name: 'Ахі Туна',
      category: 'seafood',
      description: 'Смажена тунець з кокосовим рисом та тропічними соусами',
      price: '$28',
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ingredients: ['Тунець Ахі', 'Кокосовий рис', 'Манго', 'Імбир', 'Лайм'],
      origin: 'Гавайська кухня'
    },
    {
      id: 4,
      name: 'Гавайські Маласади',
      category: 'street',
      description: 'Солодкі пончики з цукровою пудрою та різними начинками',
      price: '$8',
      rating: 4.6,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ingredients: ['Борошно', 'Цукор', 'Яйця', 'Молоко', 'Ваніль'],
      origin: 'Португальський вплив'
    },
    {
      id: 5,
      name: 'Шаве Снек',
      category: 'street',
      description: 'Морозиво зі згущеного молока та льоду, з фруктовими сиропами',
      price: '$12',
      rating: 4.8,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ingredients: ['Лід', 'Згущене молоко', 'Фруктові сиропи', 'Конденсоване молоко'],
      origin: 'Японський вплив'
    },
    {
      id: 6,
      name: 'Гавайський Шейк',
      category: 'drinks',
      description: 'Тропічний коктейль з ананасом, кокосом та ромом',
      price: '$15',
      rating: 4.7,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ingredients: ['Ананас', 'Кокос', 'Ром', 'Лайм', 'Мята'],
      origin: 'Тропічний коктейль'
    },
    {
      id: 7,
      name: 'Лі Хінг Муні',
      category: 'desserts',
      description: 'Солодка страва з манго, клейкого рису та кокосового молока',
      price: '$14',
      rating: 4.9,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ingredients: ['Манго', 'Клейкий рис', 'Кокосове молоко', 'Кунжут'],
      origin: 'Китайський вплив'
    },
    {
      id: 8,
      name: 'Кокосова креветка',
      category: 'seafood',
      description: 'Креветки в кокосовій паніровці з тропічним соусом',
      price: '$24',
      rating: 4.8,
      reviews:12,
      ingredients: ['Креветки', 'Кокос', 'Паніровка', 'Манговий соус'],
      origin: 'Гавайська кухня'
    }
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Ала Моана Центр',
      type: 'Торговий комплекс',
      description: 'Більше 50 ресторанів та кафе в одному місці',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Чайнатаун',
      type: 'Китайський квартал',
      description: 'Автентична азійська кухня та вулична їжа',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Норт Шор',
      type: 'Прибережна зона',
      description: 'Свіжі морепродукти та місцеві спеціальності',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredDishes = selectedCategory === 'all' 
    ? dishes 
    : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <div className="food-page">
      {/* Hero Section */}
      <section className="food-hero">
        <div className="hero-content">
          <h1 className="hero-title">Гавайська кухня</h1>
          <p className="hero-subtitle">
            Відкрийте смаки Тихого океану з автентичною гавайською кухнею та тропічними ласощами
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Ресторанів</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Традиційних страв</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.8</span>
              <span className="stat-label">Середня оцінка</span>
            </div>
          </div>
        </div>
      </section>

      {/* Food Categories */}
      <section className="categories-section">
        <div className="container">
          <h2>Оберіть категорію їжі</h2>
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

      {/* Dishes Grid */}
      <section className="dishes-section">
        <div className="container">
          <div className="dishes-grid">
            {filteredDishes.map(dish => (
              <div key={dish.id} className="dish-card">
                <div className="dish-image">
                  <img src={dish.image} alt={dish.name} />
                  <div className="dish-rating">
                    <span className="stars">⭐</span>
                    <span className="rating">{dish.rating}</span>
                    <span className="reviews">({dish.reviews})</span>
                  </div>
                </div>
                <div className="dish-content">
                  <div className="dish-origin">{dish.origin}</div>
                  <h3 className="dish-name">{dish.name}</h3>
                  <p className="dish-description">{dish.description}</p>
                  <div className="dish-ingredients">
                    {dish.ingredients.map((ingredient, index) => (
                      <span key={index} className="ingredient-tag">{ingredient}</span>
                    ))}
                  </div>
                  <div className="dish-footer">
                    <div className="dish-price">{dish.price}</div>
                    <button className="order-btn">Замовити</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="restaurants-section">
        <div className="container">
          <h2>Найкращі місця для їжі</h2>
          <div className="restaurants-grid">
            {restaurants.map(restaurant => (
              <div key={restaurant.id} className="restaurant-card">
                <div className="restaurant-image">
                  <img src={restaurant.image} alt={restaurant.name} />
                  <div className="restaurant-rating">
                    <span className="stars">⭐</span>
                    <span className="rating">{restaurant.rating}</span>
                  </div>
                </div>
                <div className="restaurant-content">
                  <div className="restaurant-type">{restaurant.type}</div>
                  <h3 className="restaurant-name">{restaurant.name}</h3>
                  <p className="restaurant-description">{restaurant.description}</p>
                  <button className="visit-btn">Відвідати</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Culture Section */}
      <section className="culture-section">
        <div className="container">
          <div className="culture-content">
            <div className="culture-text">
              <h2>Культура їжі на Гаваях</h2>
              <p>
                Гавайська кухня - це унікальне поєднання культурних традицій корінних гавайців, 
                азійських та європейських впливів. Кожна страва розповідає історію островів і 
                їх багатої культурної спадщини.
              </p>
              <div className="culture-features">
                <div className="feature">
                  <span className="feature-icon">🌺</span>
                  <div>
                    <h4>Традиційні інгредієнти</h4>
                    <p>Використання місцевих продуктів та традиційних методів приготування</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">🌊</span>
                  <div>
                    <h4>Свіжі морепродукти</h4>
                    <p>Щоденний улов риби та морепродуктів з Тихого океану</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">🌴</span>
                  <div>
                    <h4>Тропічні фрукти</h4>
                    <p>Свіжі ананаси, манго, папая та інші тропічні фрукти</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="culture-image">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hawaiian Food Culture" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="food-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Готові скуштувати гавайську кухню?</h2>
            <p>Забронюйте столик в найкращих ресторанах Гаваїв</p>
            <div className="cta-buttons">
              <button className="btn-primary">Забронювати столик</button>
              <button className="btn-secondary">Подивитися меню</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
