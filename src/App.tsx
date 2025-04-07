import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestNews from './components/LatestNews';
import Categories from './components/Categories';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LatestNews />
      <Categories />
    </div>
  );
}

export default App;