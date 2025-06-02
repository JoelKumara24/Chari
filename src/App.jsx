// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VantaBackground from './components/VantaBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Tours from './routes/Tours';
import SriLanka from './routes/SriLanka';
import Accommodation from './routes/Accommodation';
import Transportation from './routes/Transportation';
import TourDetail from './routes/TourDetail';
import FAQ from './routes/FAQ';
import ContactUs from './routes/ContactUs';
import styles from './App.scss';

export default function App() {
  return (
    <div className={styles.appContainer}>
      {/*
      <VantaBackground />
      */}
      <Navbar />
      <main className={styles.appContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetail />} />  {/* ← detail */}
          <Route path="/sri-lanka" element={<SriLanka />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
