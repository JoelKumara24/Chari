import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Tours.module.scss';

import tour1Img from '../assets/Ella.jpg';
import tour2Img from '../assets/Maskeliya.jpg';
import tour3Img from '../assets/Pidurangala.jpg';

// ← Replace with your actual highlight images:
import adventureImg from '../assets/beach.jpg';
import beachImg from '../assets/ElephantCouple.jpg';
import heritageImage from '../assets/beach.jpg';

const tours = [
  { id: 1, name: 'Ancient Cities Tour', caption: 'Walk through history in awe-inspiring ruins.', img: tour1Img },
  { id: 2, name: 'Tea Plantation Trek', caption: 'Sip & stroll amidst emerald tea hills.',       img: tour2Img },
  { id: 3, name: 'Wildlife Safari',       caption: 'Spot Sri Lanka’s wild side in its natural habitat.', img: tour3Img },
];

export default function Tours() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const count = tours.length;

  // Slide controls
  const prev  = () => setCurrent(i => (i - 1 + count) % count);
  const next  = () => setCurrent(i => (i + 1) % count);

  // Always show 3 cards
  const visible = [
    tours[current],
    tours[(current + 1) % count],
    tours[(current + 2) % count],
  ];

  return (
    <div className={styles.tours}>
      {/* Page Title */}
      <h1 className={styles.pageTitle}>Our Tours</h1>

      {/* Carousel */}
      <div className={styles.carousel}>
        <button className={styles.navButton} onClick={prev} aria-label="Previous">
          ◀
        </button>

        <div className={styles.cardsContainer}>
          {visible.map(t => (
            <div
              key={t.id}
              className={styles.card}
              onClick={() => navigate(`/tours/${t.id}`)}
            >
              <img src={t.img} alt={t.name} className={styles.cardImage} />
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{t.name}</h3>
                <p className={styles.cardCaption}>{t.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.navButton} onClick={next} aria-label="Next">
          ▶
        </button>
      </div>

      {/* Intro Paragraph */}
      <p className={styles.intro}>
        Discover a range of experiences—ancient ruins, misty tea country treks, and thrilling
        safaris—all expertly crafted for an unforgettable Sri Lankan adventure.Craft your journey with Chari Travel, where we tailor each itinerary to your dreams—
            be it sunrise atop ancient ruins or the gentle clink of tea cups in emerald plantations.
      </p>


    </div>
  );
}
