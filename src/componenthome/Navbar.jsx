import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../image/sd2.png';
import { Link } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

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
                    <li className='nav-item'>
                       <Link to="/home"> <a href='/' onClick={closeMenu}>Home</a> </Link>  
                    </li>
                    <li className='nav-item'>
                     <Link to="/about"> <a href='#demo' onClick={closeMenu}>About Us two</a></Link>   
                    </li>
                    <li className='nav-item'>
                       <Link to="/artist"><a href='#about' onClick={closeMenu}>Our Artists</a> </Link> 
                    </li>
                    <li className='nav-item'>
                      <Link to="/release"> <a href='#testimonials' onClick={closeMenu}>New Releases</a></Link>  
                    </li>
                    <li className='nav-item'>
                     <Link to="/contact"> <a href='#demo' onClick={closeMenu}>Contact Us</a></Link>   
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
