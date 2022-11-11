import React,{useRef} from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Service from './Service';
import Releases from './Releases';
import Footer from './Footer';


const HomePage = () => {
  const scrollRef = useRef(null);
  return (
    <div >

        <Navbar/>
        <Hero/>
        <Service/>
        <Releases/>
        <Footer/>

   

    </div>
   
  )
}

export default HomePage;