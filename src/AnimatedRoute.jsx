import React from 'react';
import {  Routes, Route , useLocation} from "react-router-dom";
import HomePage from './component/HomePage';
import AboutPage from './component2/AboutPage';
import ArtistPage from './component3/ArtistPage';
import ReleasePage from './component4/ReleasePage';
import Contact from './component5/Contact';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoute = () => {
    const location = useLocation();
  return (
   <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/home" element={ <HomePage/>}/>
        <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/artist" element={<ArtistPage/>}/>
        <Route exact path="/release" element={<ReleasePage/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
   </AnimatePresence> 
    
   
    
  )
}

export default AnimatedRoute