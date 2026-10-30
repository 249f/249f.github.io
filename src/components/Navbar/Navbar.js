import React from 'react';
import './Navbar.css';
import MyLogo from '../../assets/images/MyLogo.png'
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="navbar">
            <div className='logo-holder'>
                <img src={MyLogo} alt="logo" />
            </div>
            <div className='links-holder'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    {/* <li><a href="/#skills">Skills</a></li> */}

                </ul>
            </div>
            <div className='navbar-right'>
                <div className='theme-toggle' onClick={toggleTheme} role="button" tabIndex={0} aria-label="Toggle theme" onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}>
                    <div className='theme-toggle-track'>
                        <span className='theme-toggle-icon theme-icon-sun'>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        </span>
                        <span className='theme-toggle-icon theme-icon-moon'>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        </span>
                        <div className={`theme-toggle-thumb ${theme === 'light' ? 'thumb-light' : ''}`} />
                    </div>
                </div>
                <div className='button-holder'>
                    <a href="#contact">
                        <button>Contact Me</button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;