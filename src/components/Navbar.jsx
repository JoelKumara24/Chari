// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHero,      setIsHero]      = useState(true);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(o => !o);

  const links = [
    { to: '/',            label: 'Home' },
    { to: '/tours',       label: 'Tours' },
    { to: '/sri-lanka',   label: 'Sri Lanka' },
    { to: '/accommodation', label: 'Accommodation' },
    { to: '/transportation', label: 'Transportation' },
    { to: '/contact',     label: 'Contact' },
  ];

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) {
      setIsHero(false);
      return;
    }
    // start transparent
    setIsHero(true);

    const obs = new IntersectionObserver(
      ([e]) => setIsHero(e.isIntersecting),
      { root: null, threshold: 0, rootMargin: `-60px 0px 0px 0px` }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, [location.pathname]);

  return (
    <nav className={`${styles.navbar} ${isHero ? styles.transparent : styles.blurred}`}>
      {/* desktop links */}
      <ul className={styles.desktopMenu}>
        {links.map(({to,label}) => (
          <li key={to}>
            <NavLink to={to} className={({ isActive })=> isActive ? styles.active : ''}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* mobile hamburger */}
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <span/><span/><span/>
      </button>

      {/* mobile drawer */}
      <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          {links.map(({to,label}, i) => (
            <li key={to} style={{ transitionDelay: `${i * 0.1}s` }}>
              <NavLink
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => isActive ? styles.active : ''}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
