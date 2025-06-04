// Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          {['/', '/tours', '/sri-lanka', '/accommodation', '/transportation', '/faq', '/contact'].map(path => (
            <li key={path} onClick={() => setIsMenuOpen(false)}>
              <NavLink 
                to={path} 
                className={({ isActive }) => isActive ? styles.active : ''}
              >
                {path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}