import { useState } from 'react';
import { getRandomColor } from '../hooks/useRandomColor';
import styles from './Experience.module.css';

const experiences = [
  {
    company: 'Between Roles',
    role: '',
    period: 'Sep 2025 – Present',
    summary:
      'Preparing for next opportunity — refreshing core technical foundations and exploring TPM roles.',
    accomplishments: [],
  },
  {
    company: 'SiriusXM',
    role: 'Technical Program Manager',
    period: 'Mar 2023 – Sep 2025',
    summary:
      'Managing 2 backend engineering teams (12 devs) within Core Services. Owning cross-team delivery for token lifecycle, partner linking flows, and platform migrations.',
    accomplishments: [
      'Led the launch of the rebranded SXM app with OAuth-based integrations (Alexa, Roku, Google, Sonos) on AWS, impacting 34M+ subscribers globally',
      'Oversaw release of Device Management Portal, empowering 6M+ MAU to manage devices and 3rd-party connections via a centralized self-service portal',
      'Spearheaded migration from Synacor to in-house auth — achieving $250k+/mo savings and eliminating 7k+ lines of obsolete code',
      'Evolved team process from Kanban to Scrum-Ban; built JIRA Structure Board for bi-weekly leadership reporting',
    ],
  },
  {
    company: 'Amazon Devices AI',
    role: 'Technical Program Manager',
    period: 'Jul 2021 – Dec 2022',
    summary:
      'Managed 2 programs for Ring and Alexa Devices spanning 15+ Computer Vision features, impacting 60M+ customers worldwide.',
    accomplishments: [
      'Led a team of 30+ across Engineering, Data Science, and Annotation to deliver 15+ CV features for Ring and Alexa devices',
      'Developed dashboards in Redash via SQL queries with data from Athena and Redshift for real-time program visibility',
      'Coordinated cross-functionally with Tools, Product, V-Care, QA, and Data Science; managed release timelines across 20+ SDEs',
    ],
  },
  {
    company: 'Amazon Web Services',
    role: 'Program Manager Intern',
    period: 'Jun 2020 – Aug 2020',
    summary:
      'Automated reporting and communications for Professional Services Onboarding Training, impacting 2,000+ new hires across 6 global regions.',
    accomplishments: [
      'Automated CSAT reporting from Excel to Qualtrics — 94% decrease in manual effort, improving programs for 4,000+ customers',
      'Built automated email reminder system using AWS services; deliverables featured in Q2 QBR presentation to senior leadership',
      'Collaborated across Engineering, Marketing, and Professional Services, influencing 13 Japanese stakeholders',
    ],
  },
  {
    company: 'T-Mobile',
    role: 'Technology Intern',
    period: 'May 2019 – Aug 2019',
    summary:
      'Built executive-level reporting and analytics from cross-functional business requirements.',
    accomplishments: [
      'Created Vendor Contracts Report via Power BI for executive management, analyzing Capex and Opex spend',
      'Featured in T-Mobile\'s internal news network showcasing internship highlights, viewed by 1,000+ employees',
    ],
  },
];

function Experience() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [dotColor, setDotColor] = useState(() =>
    experiences.map(() => getRandomColor())
  );

  const handleDotHover = (i) => {
    setHoveredIdx(i);
    setDotColor((prev) => {
      const next = [...prev];
      next[i] = getRandomColor();
      return next;
    });
  };

  return (
    <section id="experience" className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={styles.entry}
              onMouseEnter={() => handleDotHover(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className={styles.line}>
                <div
                  className={styles.dot}
                  style={{
                    background: hoveredIdx === i ? dotColor[i] : '#d0cec9',
                    borderColor: hoveredIdx === i ? dotColor[i] : '#d0cec9',
                  }}
                />
                {i < experiences.length - 1 && (
                  <div className={styles.connector} />
                )}
              </div>
              <div className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.company}>{exp.company}</h3>
                    {exp.role && <p className={styles.role}>{exp.role}</p>}
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p className={styles.summary}>{exp.summary}</p>
                {exp.accomplishments.length > 0 && (
                  <ul className={styles.list}>
                    {exp.accomplishments.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
