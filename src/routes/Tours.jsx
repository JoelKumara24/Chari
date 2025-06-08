// src/routes/Tours.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Tours.module.scss';

// Replace local asset imports with your S3 URLs
const tour1Url =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/home/Ella.jpg';
const tour2Url =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/home/Maskeliya.jpg';
const tour3Url =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/home/Pidurangala.jpg';

const tours = [
  {
    id: 1,
    name: 'Ancient Cities Tour',
    caption: 'Walk through history in awe-inspiring ruins.',
    img: tour1Url,
  },
  {
    id: 2,
    name: 'Tea Plantation Trek',
    caption: 'Sip & stroll amidst emerald tea hills.',
    img: tour2Url,
  },
  {
    id: 3,
    name: 'Wildlife Safari',
    caption: 'Spot Sri Lanka’s wild side in its natural habitat.',
    img: tour3Url,
  },
];

export default function Tours() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const count = tours.length;

  // Slide controls
  const prev = () => setCurrent((i) => (i - 1 + count) % count);
  const next = () => setCurrent((i) => (i + 1) % count);

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
          {visible.map((t) => (
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
        safaris—all expertly crafted for an unforgettable Sri Lankan adventure. Craft your
        journey with Chari Travel, where we tailor each itinerary to your dreams—be it sunrise
        atop ancient ruins or the gentle clink of tea cups in emerald plantations.
      </p>
    </div>
  );
}
