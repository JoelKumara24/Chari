import React from 'react';
import styles from './FAQ.module.scss';

const faqs = [
  { 
    q: 'What is the best time to visit?', 
    a: 'November to April for beaches, May to August for wildlife.' 
  },
  { 
    q: 'Do I need a visa?', 
    a: 'Most nationalities require an ETA prior to arrival.' 
  },
  { 
    q: 'Is it safe to drink tap water?', 
    a: 'We recommend bottled water only.' 
  },

  // ─── Five Dummy Questions ───────────────────────────────────────────────────
  { 
    q: 'How do I book a tour?', 
    a: 'You can book online via our website or email our reservations team directly.' 
  },
  { 
    q: 'What currencies are accepted?', 
    a: 'We accept USD, EUR, GBP, and Sri Lankan Rupees (LKR) at the time of booking.' 
  },
  
];

export default function FAQ() {
  return (
    <div className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((f, i) => (
        <div key={i} className={styles.item}>
          <p className={styles.question}>{f.q}</p>
          <p className={styles.answer}>{f.a}</p>
        </div>
      ))}
    </div>
  );
}
