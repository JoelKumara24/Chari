import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import logo from '../assets/ChariLogo1.png';
import heroVideo from '../assets/HEROVIDEO .mp4';

import tour1 from '../assets/Ella.jpg';
import tour2 from '../assets/Maskeliya.jpg';
import tour3 from '../assets/Pidurangala.jpg';

import place1 from '../assets/Maskeliya.jpg';
import place2 from '../assets/Pidurangala.jpg';
import place3 from '../assets/Colombo.jpg';

import aboutImg from '../assets/StiltFishing.jpg';
import chariTitle from '../assets/chariTitle.svg';   // <-- new import


const tours = [
  {
    id: 1,
    img: tour1,
    title: 'Ella Nine Arches',
    desc: 'Iconic railway bridge through tea plantations',
    duration: 'Full Day',
    location: 'Sri Lanka',
  },
  {
    id: 2,
    img: tour2,
    title: 'Maskeliya',
    desc: 'Ancient palace atop a massive Forest',
    duration: 'Full Day',
    location: 'Sri Lanka',
  },
  {
    id: 3,
    img: tour3,
    title: 'Pidurangala',
    desc: 'Colonial heritage site by the sea',
    duration: 'Half Day',
    location: 'Sri Lanka',
  },
];

export default function Home() {
  const placeImages = [place1, place2, place3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((i) => (i + 1) % placeImages.length);
  const prevSlide = () =>
    setCurrentIndex((i) => (i - 1 + placeImages.length) % placeImages.length);

  return (
    <div className={styles.home}>
      <header className={styles.hero}>
        {/* Background video */}
        <video
          className={styles.heroVideo}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Logo & title on top */}
        <div className={styles.heroContent}>
          <img src={logo} alt="Chari Travel Logo" className={styles.logo} />
          <h1 className={styles.heroTitle}>
            Travel Beyond Shores
          </h1>
        </div>
      </header>

      {/* About Us */}
<section className={styles.about}>
  <div className={styles.aboutContent}>
     <h2>About Us</h2>
    <p>
      Welcome to Chari Travel, your gateway to exploring Sri Lanka like never before.
      From pristine beaches to lush tea plantations, we curate experiences that become
      lifelong memories.
    </p>
    <p>
      Founded by a team of passionate explorers and local insiders, Chari Travel has grown
      into one of Sri Lanka’s premier boutique agencies. We blend modern comforts with
      authentic cultural immersion, so every trip feels unique.
    </p>
    <p>
      Our dedicated support staff and handpicked partners are available 24/7 — whether it’s
      arranging a sunrise hike up Sigiriya or a last-minute seafood feast by the ocean.
    </p>
  </div>
 

  

  
</section>


      {/* What We Do */}
      <section className={styles.whatWeDo}>
        <h2>What We Do</h2>
        <p>
          We’re a full-service travel agency creating bespoke Sri Lanka tours—cultural
          adventures, wildlife safaris, beach getaways, and more—all customized to your
          interests and pace.
        </p>
        <div className={styles.cardGrid}>
          {tours.map((t) => (
            <div key={t.id} className={styles.card}>
              <img src={t.img} alt={t.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{t.title}</h3>
                <p className={styles.cardDesc}>{t.desc}</p>
                <div className={styles.cardFooter}>
                  <span>⏰ {t.duration}</span>
                  <span>📍 {t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/tours" className={styles.cta}>
          Explore All Tours →
        </Link>
      </section>

      {/* Top Destinations */}
<section className={styles.places}>
  {/* Left side: Heading + paragraph */}
  <div className={styles.placesText}>
    <h2>Top Sri Lankan Destinations</h2>
    <p>
      Discover the wonders of Sri Lanka: ancient temples, misty hill country,
      emerald tea estates, and sun-kissed shores. Our dedicated support staff
      and handpicked partners are available 24/7.
    </p>
  </div>

  {/* Right side: Slideshow + CTA */}
  <div className={styles.placesMedia}>
    <div className={styles.slideshow}>
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={prevSlide}
        aria-label="Previous"
      >
        ◀
      </button>
      <img
        src={placeImages[currentIndex]}
        alt={`Destination ${currentIndex + 1}`}
        className={styles.slide}
      />
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={nextSlide}
        aria-label="Next"
      >
        ▶
      </button>
    </div>
    <p className={styles.placesCTAContainer}>
      <Link to="/sri-lanka" className={styles.cta}>
        View Places →
      </Link>
    </p>
  </div>
</section>


      {/* Getting Around */}
      <section className={styles.gettingAround}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.title}>Getting Around Sri Lanka</h2>
            <p className={styles.subtitle}>
              Travel in comfort and style with our comprehensive transportation options.
              From luxury private vehicles to scenic train journeys, we ensure your journey
              is as memorable as your destinations.
            </p>
          </div>
          <div className={styles.transportGrid}>
            <div className={styles.transportItem}>
              <div className={styles.transportIcon}>🚗</div>
              <h3 className={styles.transportTitle}>Private Vehicles</h3>
              <p className={styles.transportDescription}>
                Air-conditioned cars with professional drivers
              </p>
            </div>
            <div className={styles.transportItem}>
              <div className={styles.transportIcon}>🚂</div>
              <h3 className={styles.transportTitle}>Scenic Trains</h3>
              <p className={styles.transportDescription}>
                Breathtaking railway journeys through tea country
              </p>
            </div>
            <div className={styles.transportItem}>
              <div className={styles.transportIcon}>🚐</div>
              <h3 className={styles.transportTitle}>Group Transport</h3>
              <p className={styles.transportDescription}>
                Comfortable minibuses for larger groups
              </p>
            </div>
          </div>
          <div className={styles.centerButton}>
            <Link to="/transportation" className={styles.button}>
              Learn About Transport →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
     <section className={styles.whyUs}>
  <h2>Why Choose Us?</h2>
  <p>
    At Chari Travel, we believe your trip should be as unique as you are. Here’s why
    clients rave about us:
  </p>
  <ul>
    <li>
      <div className={styles.reasonTitle}>
        Personalized, <br />hand-crafted itineraries
      </div>
      <p className={styles.reasonDesc}>
        Our team works one-on-one with you to build a custom Sri Lanka route based on
        your interests—from hidden tea-plantation hikes to seaside cultural tours.
      </p>
    </li>
    <li>
      <div className={styles.reasonTitle}>
        Insider <br />local knowledge
      </div>
      <p className={styles.reasonDesc}>
        We partner with local guides and families—getting you access to authentic
        experiences like home-cooked meals in small villages or sunrise visits to
        lesser-known temples.
      </p>
    </li>
    <li>
      <div className={styles.reasonTitle}>
        24/7 <br />traveler support
      </div>
      <p className={styles.reasonDesc}>
        Day or night, our in-country support team is standing by—so if plans change or you
        need last-minute recommendations, help is just a phone call away.
      </p>
    </li>
    <li>
      <div className={styles.reasonTitle}>
        Transparent, <br />competitive pricing
      </div>
      <p className={styles.reasonDesc}>
        No hidden fees. You’ll receive an itemized quote up front, and we’ll always
        explain exactly where your money goes—so you can travel stress-free.
      </p>
    </li>
  </ul>
  <p>
    Join thousands of satisfied travelers who’ve discovered Sri Lanka’s magic with
    Chari Travel. Let us design the journey of a lifetime!
  </p>
</section>

    </div>
  );
}
