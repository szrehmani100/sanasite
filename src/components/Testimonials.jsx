import { useState } from 'react';
import { getRandomColor } from '../hooks/useRandomColor';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote:
      "I served as one of Sana's mentors at AWS. It was a rewarding experience. She is diligent, professional, resourceful, and a pleasure to work with. She really takes ownership and delivers results. I am looking forward to when she graduates so we can colleagues again.",
    name: 'Eric Emerson',
    title: 'CX Transformation Leader, AWS',
    relationship: 'Mentor at AWS',
  },
  {
    quote:
      "Sana is AWSome! After working with her, I can confirm Sana's customer obsession and ability to deliver results. One of the keys to her success with working with my team her willingness to provide a product, receive feedback and action on said feedback. Sana was a crucial component to prepare my team for future usage of her products. She showed true professionalism throughout our time working together and would make a great addition to any business/team!",
    name: 'Justin Garrett',
    title: 'Elevating L&D Teams with Data & More Data',
    relationship: 'Worked on the same team',
  },
  {
    quote:
      "Sana is a natural problem solver who's strong sense of ownership enables her to deliver high-quality results and quickly earn the trust of her stakeholders. I had the pleasure of being Sana's manager during her Program Management internship with AWS. During this internship, Sana automated multiple inefficient processes in her short time on the team. I was really impressed with Sana's ability to quickly get up-to-speed, dive deep to identify areas for improvement and learn the necessary skills to develop an automated solution, all while building strong relationships with cross-functional team members due to her friendly and calm demeanor.",
    name: 'Michael Ehde',
    title: 'Managing Partner, Munera Capital',
    relationship: 'Manager at AWS',
  },
];

function Testimonials() {
  const [colors] = useState(() => testimonials.map(() => getRandomColor()));

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.title}>What people say</h2>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={styles.card}
              style={{ borderTopColor: colors[i] }}
            >
              <blockquote className={styles.quote}>"{t.quote}"</blockquote>
              <div className={styles.author}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.meta}>{t.title}</span>
                <span className={styles.relationship}>{t.relationship}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
