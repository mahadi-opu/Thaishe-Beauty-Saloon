import React from 'react';
import './App.css';
import Header from '../src/Partial/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Partial/Footer';
import ContactUs from './Pages/ContactUs/ContactUs';




function App() {

  return (
    <div>
      <Header /> 
        <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
