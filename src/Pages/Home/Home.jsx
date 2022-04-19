import React from 'react';
import '../Home/Home.css';
import '../Home/responsive.css';
import Hero from '../Home/Hero'
import About from '../Home/About'
import Service from '../Home/Service'
import Pricing from '../Home/Pricing'
import Gallary from '../Home/Gallary'
import Blogs from '../Home/Blogs'
import Location from '../Home/Location'



const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Service />
            <Pricing />
            <Gallary />
            <Blogs />
            <Location />
        </div>
    );
};

export default Home;