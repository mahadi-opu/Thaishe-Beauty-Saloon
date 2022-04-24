import React from 'react';
import './App.css';
import Header from '../src/Partial/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Partial/Footer';
import Blogpg from './Pages/BlogPg/BlogPg';



function App() {

  return (
    <div>
      <Header /> 
        <Blogpg/>
      <Footer/>
    </div>
  );
}

export default App;
