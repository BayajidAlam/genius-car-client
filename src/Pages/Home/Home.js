import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Details from './Details/Details';
import OurProduct from './OurProduct/OurProduct';
import Services from './Services/Services';

const Home = () => {
  return (
    <div>
          <Banner/>
          <About/>
          <Services/>
          <Details/>
          <OurProduct/>
    </div>
  );
};

export default Home;