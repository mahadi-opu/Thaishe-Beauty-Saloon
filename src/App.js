import React from 'react';
import './App.css';
import Header from '../src/Partial/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Partial/Footer';

import Home from '../src/Pages/Home/Home'

function App() {

  return (
    <div>
      <Header /> 
        <Home/>
      <Footer/>
    </div>
  );
}

export default App;
