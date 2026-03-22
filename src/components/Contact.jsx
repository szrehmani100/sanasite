import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Let's connect</h2>
        <p className={styles.text}>
          I'm always open to discussing new opportunities, interesting programs,
          or just chatting about tech and languages. Feel free to reach out.
        </p>
        <div className={styles.links}>
          <a
            href="mailto:sanaaarehmani@gmail.com"
            className={styles.link}
          >
            <span className={styles.linkLabel}>Email</span>
            <span className={styles.linkValue}>sanaaarehmani@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sana-rehmani/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.linkLabel}>LinkedIn</span>
            <span className={styles.linkValue}>sana-rehmani</span>
          </a>
          <a
            href="https://docs.google.com/document/d/1PNynNwJ-WR5s_P1z6uxFmaxzhMDj_LM8/edit"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.linkLabel}>Resume</span>
            <span className={styles.linkValue}>View full resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
