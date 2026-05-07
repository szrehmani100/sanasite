import { useState } from 'react';
import { getRandomColor } from '../hooks/useRandomColor';
import styles from './Programs.module.css';

const programs = [
  {
    title: '3rd Party Platform Integrations',
    company: 'SiriusXM',
    summary: 'Led OAuth-based integrations across Alexa, Roku, Google, and Sonos for the rebranded SXM app, impacting 34M+ subscribers globally.',
  },
  {
    title: 'Ring & Alexa CV/ML Data Programs',
    company: 'Amazon',
    summary: 'Led 30+ people to ship 15+ computer vision features on schedule, impacting 60M+ customers.',
  },
];

function Programs() {
  const [colors] = useState(() => programs.map(() => getRandomColor()));

  return (
    <section id="programs" className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Key Programs</h2>
        <div className={styles.grid}>
          {programs.map((prog, i) => (
            <div
              key={prog.title}
              className={styles.card}
              style={{ borderTopColor: colors[i] }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{prog.title}</h3>
                <span className={styles.cardCompany}>{prog.company}</span>
              </div>
              <p className={styles.cardSummary}>{prog.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
