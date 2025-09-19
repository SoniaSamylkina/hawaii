import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
   <Header onSearch={(q)=>console.log("search:", q)} />
    <Footer />
    </div>
  );
}

export default App;
