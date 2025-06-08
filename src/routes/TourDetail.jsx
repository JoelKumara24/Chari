// src/routes/TourDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './TourDetail.module.scss';

// Replace local asset imports with your S3 URLs
const tour1Url =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/home/Ella.jpg';
const tour2Url =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/home/Maskeliya.jpg';
const tour3Url =
  'https://chari-travels-media.s3.us-east-1.amazonaws.com/assets/home/Pidurangala.jpg';

// Dummy data for all tours, including title, intro, and a list of days
const ALL_TOURS = [
  {
    id: 1,
    name: 'Ancient Cities Tour',
    title: 'Discover the Ancient Wonders of Sri Lanka',
    intro:
      'Join us on an 8-day journey through Sri Lanka’s most iconic ancient cities. From the towering rock fortress of Sigiriya to the intricately carved temples of Polonnaruwa, immerse yourself in a bygone era of kings and kingdoms.',
    days: [
      {
        number: 1,
        title: 'Day 01 – Arrival & Orientation',
        img: tour1Url,
        description:
          'Arrive at Bandaranaike International Airport and transfer to your hotel in Sigiriya. Spend the afternoon unwinding by the pool and enjoying a traditional Sri Lankan welcome dinner as you get oriented for the adventure ahead.',
      },
      {
        number: 2,
        title: 'Day 02 – Climb Sigiriya Rock Fortress',
        img: tour2Url,
        description:
          'After breakfast, ascend the famed Sigiriya Rock Fortress. Marvel at ancient frescoes, water gardens, and panoramic views from the summit. In the evening, explore a nearby village and enjoy an authentic “pol-roti” cooking demonstration.',
      },
      {
        number: 3,
        title: 'Day 03 – Explore Polonnaruwa Ancient City',
        img: tour3Url,
        description:
          'Drive to Polonnaruwa, Sri Lanka’s medieval capital. Wander among the ruins of palaces, temples, and colossal Buddha statues. In the late afternoon, return to your hotel and relax on the terrace with views of Pidurangala Rock.',
      },
      // (Add more days as needed...)
    ],
  },
  {
    id: 2,
    name: 'Tea Plantation Trek',
    title: 'Wander Through Emerald Tea Hills',
    intro:
      'Spend 6 days exploring the misty tea gardens of Sri Lanka’s Hill Country. From Nuwara Eliya’s colonial charm to the rolling fields of plantation estates, learn about tea production and sample the freshest brews.',
    days: [
      {
        number: 1,
        title: 'Day 01 – Arrival in Nuwara Eliya',
        img: tour2Url,
        description:
          'Touch down in Colombo and take the scenic train ride to Nuwara Eliya. Settle into a colonial-style bungalow nestled in the hills. Evening at leisure to stroll around “Little England” and its botanical gardens.',
      },
      {
        number: 2,
        title: 'Day 02 – Tea Factory Visit & Hike',
        img: tour1Url,
        description:
          'Visit a local tea factory to see the entire production process, from leaf to cup. In the afternoon, embark on a guided trek through terraced tea fields, learning to spot the best plucking leaves alongside local pickers.',
      },
      {
        number: 3,
        title: 'Day 03 – Horton Plains & World’s End',
        img: tour3Url,
        description:
          'Early morning drive to Horton Plains National Park. Hike to “World’s End” and Bakers Falls. Return via bakeries in Ambewela for fresh pastries before heading back to your hotel to relax.',
      },
      // (Add more days as needed...)
    ],
  },
  {
    id: 3,
    name: 'Wildlife Safari',
    title: 'Encounter Sri Lanka’s Untamed Wilderness',
    intro:
      'Embark on a 7-day safari adventure across Sri Lanka’s top national parks. From Yala’s leopards to Udawalawe’s elephants, immerse yourself in the island’s incredible biodiversity, all while staying in comfortable safari lodges.',
    days: [
      {
        number: 1,
        title: 'Day 01 – Arrival & Evening Safari',
        img: tour3Url,
        description:
          'Land in Colombo and transfer directly to Yala National Park. Check into your safari lodge, then head out for an evening game drive in search of sloth bears, deer, and the elusive leopard at twilight.',
      },
      {
        number: 2,
        title: 'Day 02 – Full-Day Yala Exploration',
        img: tour1Url,
        description:
          'Spend a full day exploring Yala—home to the highest leopard density in Asia. Majestic mugger crocodiles, wild elephants, and colorful birdlife await. Picnic lunch in the park followed by sunset views over the Indian Ocean coastline.',
      },
      {
        number: 3,
        title: 'Day 03 – Transfer to Udawalawe',
        img: tour2Url,
        description:
          'Depart Yala and head to Udawalawe National Park. After checking into your safari lodge, enjoy an afternoon game drive where herds of elephants gather around the reservoir’s banks.',
      },
      // (Add more days as needed...)
    ],
  },
];

export default function TourDetail() {
  const { id } = useParams();
  const tour = ALL_TOURS.find((t) => t.id === parseInt(id, 10));

  if (!tour) return <p>Tour not found.</p>;

  return (
    <div className={styles.detail}>
      {/* Tour Title & Intro */}
      <h1 className={styles.tourTitle}>{tour.name}</h1>
      <p className={styles.intro}>{tour.intro}</p>

      {/* Days Sections */}
      <div className={styles.daysContainer}>
        {tour.days.map((day, index) => (
          <div
            key={day.number}
            className={`${styles.daySection} ${
              index % 2 === 1 ? styles.reverse : ''
            }`}
          >
            <div className={styles.dayImage}>
              <img src={day.img} alt={day.title} />
            </div>
            <div className={styles.dayText}>
              <h2 className={styles.dayTitle}>{day.title}</h2>
              <p className={styles.dayDescription}>{day.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Link to="/tours" className={styles.back}>
        ← Back to Tours
      </Link>
    </div>
  );
}
