import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './TourDetail.module.scss';
import tour1Img from '../assets/Ella.jpg';
import tour2Img from '../assets/Maskeliya.jpg';
import tour3Img from '../assets/Pidurangala.jpg';

// (In real life you’d fetch these from an API, or pass via context/props)
const ALL_TOURS = [
  { id: 1, name: 'Ancient Cities Tour', caption: 'Walk through history…', img: tour1Img },
  { id: 2, name: 'Tea Plantation Trek', caption: 'Sip & stroll…',       img: tour2Img },
  { id: 3, name: 'Wildlife Safari',       caption: 'Spot the wild…',     img: tour3Img },
];

export default function TourDetail() {
  const { id } = useParams();
  const tour = ALL_TOURS.find(t => t.id === parseInt(id, 10));

  if (!tour) return <p>Tour not found.</p>;

  return (
    <div className={styles.detail}>
      <Link to="/tours" className={styles.back}>← Back to Tours</Link>
      <h1>{tour.name}</h1>
      <img src={tour.img} alt={tour.name} className={styles.image} />
      <p className={styles.caption}>{tour.caption}</p>
      {/* Add more fields here: itinerary, price, booking button… */}
    </div>
  );
}
