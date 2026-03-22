import { useState } from 'react';
import { getRandomColor } from '../hooks/useRandomColor';
import styles from './Skills.module.css';

const skillGroups = [
  {
    title: 'Technical',
    items: ['AWS', 'Power BI', 'SQL', 'GitLab', 'Jira', 'Confluence', 'Agile / Scrum'],
  },
  {
    title: 'Languages — Native',
    items: ['English', 'Hindi (हिन्दी)'],
  },
  {
    title: 'Languages — Fluent',
    items: ['Japanese (日本語) — used in role at Amazon'],
  },
  {
    title: 'Languages — Conversational',
    items: ['Korean (한국어)', 'Thai (ภาษาไทย)', 'Chinese (中文)'],
  },
  {
    title: 'Certifications',
    items: [
      'AWS Solutions Architect Associate',
      'AWS Cloud Practitioner',
      'Certified Scrum Master (CSM)',
    ],
  },
];

function Tag({ label }) {
  const [color, setColor] = useState(() => '#e8e6e1');

  return (
    <span
      className={styles.tag}
      style={{ borderColor: color }}
      onMouseEnter={() => setColor(getRandomColor())}
      onMouseLeave={() => setColor('#e8e6e1')}
    >
      {label}
    </span>
  );
}

function Skills() {
  return (
    <section id="skills" className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Skills & Certifications</h2>
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <div className={styles.tags}>
                {group.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
