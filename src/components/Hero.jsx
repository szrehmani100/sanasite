import { useState } from 'react';
import { getRandomColor } from '../hooks/useRandomColor';
import styles from './Hero.module.css';

function Hero() {
  const [borderColor, setBorderColor] = useState(getRandomColor);

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div
          className={styles.avatar}
          style={{ borderColor }}
          onMouseEnter={() => setBorderColor(getRandomColor())}
        >
          <img
            src="/profile.jpg"
            alt="Sana Rehmani"
            className={styles.photo}
          />
        </div>
        <div className={styles.text}>
          <p className={styles.greeting}>Hello, I'm</p>
          <h1 className={styles.name}>Sana Rehmani</h1>
          <p className={styles.title}>Technical Program Manager</p>
          <p className={styles.summary}>
            4+ years delivering large-scale backend migrations, partner
            integrations, and data programs at SiriusXM and Amazon. With
            experience across six languages — including professional fluency in
            Japanese — I love collaborating across global engineering teams to
            ship products that matter.
          </p>
          <p className={styles.availability}>
            Open to remote and hybrid TPM roles in Chicago
          </p>
          <div className={styles.cta}>
            <a href="#experience" className={styles.primaryBtn}>
              View my work
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Get in touch
            </a>
            <a
              href="https://docs.google.com/document/d/1PNynNwJ-WR5s_P1z6uxFmaxzhMDj_LM8/edit"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
