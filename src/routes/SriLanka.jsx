// src/routes/SriLanka.jsx
import React from 'react';
import styles from './SriLanka.module.scss';

// S3 URLs for all images
const introImgUrl =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/sriLanka/beach-bg.jpg';
const seeImgUrl =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/sriLanka/see.jpg';
const doImgUrl =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/sriLanka/do.jpg';
const stayImgUrl =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/sriLanka/stay.jpg';
const eatImgUrl =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/sriLanka/eat.jpg';
const moveImgUrl =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/sriLanka/tuk.jpg';

export default function SriLanka() {
  return (
    <div className={styles.page}>
      {/* 1. Intro */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Discover Sri Lanka</h2>
          <p>
            From misty mountains to golden beaches, Sri Lanka is a land of incredible
            biodiversity and rich cultural heritage. Every journey here becomes a story
            you’ll tell for a lifetime.
          </p>
        </div>
        <div className={styles.media}>
          <img
            src={introImgUrl}
            alt="Sri Lanka Landscape"
            className={styles.image}
          />
          <p className={styles.caption}>Misty mountains and golden beaches</p>
        </div>
      </section>

      {/* 2. Things to See (reversed) */}
      <section className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.media}>
          <img src={seeImgUrl} alt="Ancient Temple" className={styles.image} />
          <p className={styles.caption}>
            Ancient temples & historic ruins
          </p>
        </div>
        <div className={styles.text}>
          <h2>Things to See</h2>
          <p>
            Marvel at the rock fortress of Sigiriya, wander through the sacred city of
            Kandy, and explore the colonial architecture of Galle Fort.
          </p>
        </div>
      </section>

      {/* 3. Things to Do */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Things to Do</h2>
          <p>
            Trek through emerald tea plantations, go whale watching off the southern coast,
            or take a wildlife safari in one of our national parks.
          </p>
        </div>
        <div className={styles.media}>
          <img src={doImgUrl} alt="Tea Plantation Trek" className={styles.image} />
          <p className={styles.caption}>Tea plantation adventures</p>
        </div>
      </section>

      {/* 4. Where to Stay (reversed) */}
      <section className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.media}>
          <img src={stayImgUrl} alt="Luxury Cottage" className={styles.image} />
          <p className={styles.caption}>Boutique villas & eco-lodges</p>
        </div>
        <div className={styles.text}>
          <h2>Where to Stay</h2>
          <p>
            Choose from beachfront resorts, hill-country villas, and jungle eco-lodges
            – all hand-picked for comfort and local charm.
          </p>
        </div>
      </section>

      {/* 5. What to Eat */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2>What to Eat</h2>
          <p>
            Savor spicy curries, fresh seafood, and kottu roti at roadside stalls
            or in award-winning restaurants.
          </p>
        </div>
        <div className={styles.media}>
          <img src={eatImgUrl} alt="Sri Lankan Cuisine" className={styles.image} />
          <p className={styles.caption}>Authentic Sri Lankan flavors</p>
        </div>
      </section>

      {/* 6. How to Move Around (reversed) */}
      <section className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.media}>
          <img src={moveImgUrl} alt="Scenic Train" className={styles.image} />
          <p className={styles.caption}>Scenic train journeys</p>
        </div>
        <div className={styles.text}>
          <h2>How to Move Around</h2>
          <p>
            Travel in style by private car, hop on historic hill-country trains, or explore
            towns in a tuk-tuk for an unforgettable experience.
          </p>
        </div>
      </section>
    </div>
  );
}
