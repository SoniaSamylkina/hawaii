import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
   <Header onSearch={(q)=>console.log("search:", q)} />
    </div>
  );
}

export default App;
