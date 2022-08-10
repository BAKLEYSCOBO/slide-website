import React from 'react';
import Navbar from '../componentaboutus/NavbarAbout';
import Hero from '../componentaboutus/HeroAbout';
import About from './About';
import Team from './Team';
import Footer from './Footer';



const ArtistPage = () => {
  return (
    <>
       <Navbar/>
       <Hero/>
       <About/>
       <Team/>
       <Footer/>
    </>
  )
}

export default ArtistPage;