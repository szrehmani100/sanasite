import { useState } from 'react';
import { getRandomColor } from '../hooks/useRandomColor';
import styles from './Programs.module.css';

const programs = [
  {
    title: 'Synacor to In-House Auth Migration',
    company: 'SiriusXM',
    summary: 'Migrated 3rd-party auth to an in-house solution, saving $250k+/mo and removing 7k+ lines of legacy code.',
  },
  {
    title: 'Roku Partner Integration',
    company: 'SiriusXM',
    summary: 'Drove cross-team alignment across 5 engineering teams to deliver partner integration ahead of a revised timeline.',
  },
  {
    title: 'Production Incident — Silent Kinesis Failure',
    company: 'SiriusXM',
    summary: 'Coordinated incident response across 3 teams and led migration to a Scala-based E2E testing framework.',
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
