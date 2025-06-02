import React from 'react';
import styles from './Transportation.module.scss';

// Replace these with your actual image imports
import carImg from '../assets/beach-bg.jpg';
import trainImg from '../assets/ElephantCouple.jpg';
import boatImg from '../assets/Maskeliya.jpg';
import flightImg from '../assets/beach.jpg';

export default function Transportation() {
  return (
    <div className={styles.page}>
      {/* 1. Intro Section */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Transportation</h2>
          <p>
            A pleasant holiday experience is key, and we understand that transportation is a big
            part of that equation. Especially when you embark on that much awaited and well-organized
            adventure in Sri Lanka.
          </p>
          <p>
            We at Chari take every effort to ensure that you travel safe and sound. We can arrange
            coaches, vans, or luxury cars to suit your preference. Our fleet of vehicles are well
            maintained and driven by multilingual chauffeurs with a good understanding of routes. Our
            chauffeurs take their duties to heart and accommodate customer requests to ensure a smooth
            and enjoyable journey.
          </p>
        </div>
        <div className={styles.media}>
          <img
            src={carImg}
            alt="Car and Driver"
            className={styles.image}
          />
          <p className={styles.caption}>Comfortable car & driver service</p>
        </div>
      </section>

      {/* 2. Car & Driver (reversed) */}
      <section className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.media}>
          <img
            src={carImg}
            alt="Car and Driver"
            className={styles.image}
          />
          <p className={styles.caption}>Luxury cars, coaches, and vans</p>
        </div>
        <div className={styles.text}>
          <h2>Car & Driver</h2>
          <p>
            Choose from air-conditioned private cars, luxury vans, or spacious coaches, all driven by
            experienced, multilingual chauffeurs who know Sri Lanka’s roads inside out. Sit back,
            relax, and let us handle the driving while you take in the scenery.
          </p>
        </div>
      </section>

      {/* 3. Train Journeys */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Train Journeys</h2>
          <p>
            Embark on one of the world’s most scenic train routes through misty tea country, rolling
            hills, and lush valleys. Our itineraries include reserved seats on picturesque routes such
            as Kandy to Ella, where you’ll witness breathtaking landscapes from the comfort of your
            carriage.
          </p>
        </div>
        <div className={styles.media}>
          <img
            src={trainImg}
            alt="Train Journey"
            className={styles.image}
          />
          <p className={styles.caption}>Scenic hill-country train rides</p>
        </div>
      </section>

      {/* 4. Boat Rides (reversed) */}
      <section className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.media}>
          <img
            src={boatImg}
            alt="Boat Ride"
            className={styles.image}
          />
          <p className={styles.caption}>Leisurely boat rides & river safaris</p>
        </div>
        <div className={styles.text}>
          <h2>Boat Rides</h2>
          <p>
            Cruise along tranquil rivers, explore mangrove-lined waterways, or charter a private boat
            for a coastal excursion. From gentle river safaris to sunset cruises on the southern coast,
            our boat experiences are designed for relaxation and wildlife spotting.
          </p>
        </div>
      </section>

      {/* 5. Domestic Flights */}
      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Domestic Flights</h2>
          <p>
            For those who need to cover longer distances quickly, we offer domestic flights between
            major airports. Fly from Colombo to Jaffna, Trincomalee, or Hambantota, saving time while
            still enjoying views of Sri Lanka’s coastal beauty from above.
          </p>
        </div>
        <div className={styles.media}>
          <img
            src={flightImg}
            alt="Domestic Flight"
            className={styles.image}
          />
          <p className={styles.caption}>Fast, convenient domestic flights</p>
        </div>
      </section>
    </div>
  );
}
