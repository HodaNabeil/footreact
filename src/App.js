
import './App.css';
import Category from './components/Category';
import FliterMenu from './components/FliterMenu';
import HeandleCard from './components/HeandleCard';
import Hero from './components/Hero';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <HeandleCard/>
        <FliterMenu/>
        <Category/>
    </div>
  );
}

export default App;
