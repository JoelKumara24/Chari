import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        {['/', '/tours', '/sri-lanka', '/accommodation', '/transportation', '/faq', '/contact'].map(path => (
          <li key={path}>
            <NavLink to={path} className={({ isActive }) => isActive ? styles.active : ''}>
              {path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>)
}
