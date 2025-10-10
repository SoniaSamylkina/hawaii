import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Sales from './page/Sales';
import Food from './page/Food';
import Nature from './page/Nature';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (href) => {
    if (href === '#sales') {
      setCurrentPage('sales');
    } else if (href === '#food') {
      setCurrentPage('food');
    } else if (href === '#nature') {
      setCurrentPage('nature');
    } else if (href === '#') {
      setCurrentPage('home');
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
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Header onSearch={(q)=>console.log("search:", q)} onNavigate={handleNavigation} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
