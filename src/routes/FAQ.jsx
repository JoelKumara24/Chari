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
  { 
    q: 'Can I customize my itinerary?', 
    a: 'Absolutely—just let us know your preferences and we’ll tailor a private package for you.' 
  },
  { 
    q: 'Do I need vaccinations before traveling?', 
    a: 'A yellow fever certificate is required if arriving from an infected area; other standard vaccinations are recommended.' 
  },
  { 
    q: 'What is the cancellation policy?', 
    a: 'You can cancel or modify up to 14 days before departure for a full refund, minus a small processing fee. See our full T&Cs for details.' 
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
