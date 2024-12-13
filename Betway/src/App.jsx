import React from 'react';
import Navbar from './Home/Navbar';
import HeroSection from './Home/Herosection';
import PromoSection from './Home/promoSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <PromoSection/>
      {/* Hero Section and other components will come here */}
    </div>
  );
}

export default App;

