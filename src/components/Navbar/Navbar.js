import React from 'react';
import './Navbar.css';
import MyLogo from '../../assets/images/MyLogo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='logo-holder'>
                <img src={MyLogo} alt="logo" />
            </div>
            <div className='links-holder'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><a href="/#skills">Skills</a></li>

                </ul>
            </div>
            <div className='button-holder'>
                <a href="#contact">
                    <button>Contact Me</button>
                </a>
            </div>

        </div>
    );
};

export default Navbar;