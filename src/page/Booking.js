import React, { useState } from 'react';
import './Booking.css';

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    guests: 2,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booking-page">
        <section className="booking-hero">
          <div className="container">
            <h1 className="title">Дякуємо! 🌺</h1>
            <p className="subtitle">Ми зв'яжемося з вами найближчим часом, щоб підтвердити бронювання.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <section className="booking-hero">
        <div className="container">
          <h1 className="title">Бронювання туру</h1>
          <p className="subtitle">Заповніть форму, і ми допоможемо спланувати ідеальну подорож на Гаваї</p>
        </div>
      </section>

      <section className="booking-form-section">
        <div className="container">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Ім'я та прізвище</label>
                <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Ваше ім'я" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Телефон</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+380..." required />
              </div>
              <div className="form-group">
                <label>Дати подорожі</label>
                <input name="dates" type="text" value={form.dates} onChange={handleChange} placeholder="Напр.: 12-19 липня" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Кількість гостей</label>
                <select name="guests" value={form.guests} onChange={handleChange}>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Деталі</label>
                <input name="message" type="text" value={form.message} onChange={handleChange} placeholder="Побажання / тип туру" />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-submit">Підтвердити бронювання</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
