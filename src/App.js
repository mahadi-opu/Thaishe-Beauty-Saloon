import React from 'react';
import './App.css';
import Header from '../src/Partial/Header';
import Home from '../src/Pages/Home/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
