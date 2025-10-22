import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Sales from './page/Sales';
import Food from './page/Food';
import Nature from './page/Nature';
import Booking from './page/Booking';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  // hash-based navigation sync
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash || '#';
      if (hash === '#sales') setCurrentPage('sales');
      else if (hash === '#food') setCurrentPage('food');
      else if (hash === '#nature') setCurrentPage('nature');
      else if (hash === '#booking') setCurrentPage('booking');
      else setCurrentPage('home');
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const handleNavigation = (href) => {
    if (href === '#sales') {
      setCurrentPage('sales');
    } else if (href === '#food') {
      setCurrentPage('food');
    } else if (href === '#nature') {
      setCurrentPage('nature');
    } else if (href === '#booking') {
      setCurrentPage('booking');
    } else if (href === '#') {
      setCurrentPage('home');
    }
  };

  // Basic finder: route by keywords in query
  const handleSearch = (query) => {
    const q = query.toLowerCase();
    if (q.includes('їжа') || q.includes('food') || q.includes('еда')) {
      window.location.hash = '#food';
    } else if (q.includes('прир') || q.includes('nature') || q.includes('пляж') || q.includes('beach')) {
      window.location.hash = '#nature';
    } else if (q.includes('прод') || q.includes('sale') || q.includes('тур')) {
      window.location.hash = '#sales';
    } else if (q.includes('брон') || q.includes('book') || q.includes('reserve')) {
      window.location.hash = '#booking';
    } else {
      window.location.hash = '#';
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'sales':
        return <Sales />;
      case 'food':
        return <Food />;
      case 'nature':
        return <Nature />;
      case 'booking':
        return <Booking />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} onNavigate={handleNavigation} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
