import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Details from './Details/Details';
import Services from './Services/Services';

const Home = () => {
  return (
    <div>
          <Banner/>
          <About/>
          <Services/>
          <Details/>
    </div>
  );
};

export default Home;