import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../image/sd2.png';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Fade } from 'react-reveal';

import './Navbar.css';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        width: "600ms ease",
        delayChildren: 0.7,
        staggerChildren: 0.7,
        
      },
    },
    
  };
  
  const item = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: -100,
      opacity: 1,
    },
  };


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    


    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <Fade top>
                  <li className='nav-item' >
                       <Link to="/home"> <a href='/' >Home</a> </Link>  
                    </li>
                    <li className='nav-item' >
                     <Link to="/about"> <a href='/' >About Us</a></Link>   
                    </li>
                    <li className='nav-item' >
                       <Link to="/artist"><a href='/'>Our Artists</a> </Link> 
                    </li>
                    <li className='nav-item' >
                      <Link to="/release"> <a href='/'>New Releases</a></Link>  
                    </li>
                    <li className='nav-item'>
                     <Link to="/contact"> <a href='/'>Contact Us</a></Link>   
                    </li>
                  </Fade>
         
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
