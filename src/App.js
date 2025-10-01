import Header from './components/Header';
import HomePage from './components/HomePage';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header onSearch={(q)=>console.log("search:", q)} />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
