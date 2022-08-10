import React from 'react';
import Navbar from '../componenthome/Navbar';
import Hero from '../componenthome/Hero';
import Service from './Service';
import Releases from './Releases';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Service/>
        <Releases/>
        <Footer/>

    </>
  )
}

export default HomePage;