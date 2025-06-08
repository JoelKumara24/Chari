// src/routes/Accommodation.jsx
import React from 'react';
import styles from './Accommodation.module.scss';

// S3 URLs for all images
const introImgUrl =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/accommodation/intro.jpg';
const hotelsImgUrl =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/accommodation/hotel.jpg';
const boutiqueImgUrl =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/accommodation/boutique.jpg';
const villasImgUrl =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/accommodation/villa.jpg';
const homestayImgUrl =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/accommodation/home.jpg';

export default function Accommodation() {
  return (
    <div className={styles.page}>
      {/* 1. Accommodations Intro */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Accommodation Options</h2>
          <p>
            Sri Lanka offers a wide array of stays—from luxury resorts on the coast to
            cozy homestays in quaint villages. Wherever you wander, you’ll find comfort,
            local flavor, and warm hospitality waiting.
          </p>
        </div>
        <div className={styles.media}>
          <img
            src={introImgUrl}
            alt="Assorted Sri Lankan Accommodations"
            className={styles.image}
          />
          <p className={styles.caption}>
            A sampling of island accommodations
          </p>
        </div>
      </section>

      {/* 2. Hotels (reversed) */}
      <section className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.media}>
          <img
            src={hotelsImgUrl}
            alt="Beachfront Hotel"
            className={styles.image}
          />
          <p className={styles.caption}>
            Modern city & beachfront hotels
          </p>
        </div>
        <div className={styles.text}>
          <h2>Hotels</h2>
          <p>
            From international chains to boutique city properties, Sri Lankan hotels
            cater to every traveler. Enjoy sleek city-center rooms, rooftop pools,
            and all the amenities you expect for a seamless stay.
          </p>
        </div>
      </section>

      {/* 3. Boutique Hotels */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Boutique Hotels</h2>
          <p>
            Experience intimate settings with personalized service. These boutique
            properties are often restored colonial homes or heritage bungalows, boasting
            unique design, lush gardens, and locally inspired décor.
          </p>
        </div>
        <div className={styles.media}>
          <img
            src={boutiqueImgUrl}
            alt="Chic Boutique Hotel"
            className={styles.image}
          />
          <p className={styles.caption}>
            Charming boutique hotel nestled in history
          </p>
        </div>
      </section>

      {/* 4. Villas & Bungalows (reversed) */}
      <section className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.media}>
          <img
            src={villasImgUrl}
            alt="Luxury Villa"
            className={styles.image}
          />
          <p className={styles.caption}>
            Private villas & seaside bungalows
          </p>
        </div>
        <div className={styles.text}>
          <h2>Villas & Bungalows</h2>
          <p>
            Perfect for families or groups, these private villas and bungalows come
            with exclusive amenities—private pools, garden patios, and spacious living
            areas—set against stunning coastal or countryside backdrops.
          </p>
        </div>
      </section>

      {/* 5. Home Stays */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Home Stays</h2>
          <p>
            Stay with a local family and dive into authentic Sri Lankan life. Enjoy home-cooked
            meals, learn traditional crafts, and experience island hospitality firsthand in
            remote villages.
          </p>
        </div>
        <div className={styles.media}>
          <img
            src={homestayImgUrl}
            alt="Sri Lankan Homestay"
            className={styles.image}
          />
          <p className={styles.caption}>
            Authentic village homestay experience
          </p>
        </div>
      </section>
    </div>
  );
}
