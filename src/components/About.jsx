import styles from './About.module.css';

const highlights = [
  { number: '4+', label: 'Years in TPM' },
  { number: '6', label: 'Languages spoken' },
  { number: '60M+', label: 'Customers impacted' },
  { number: '3', label: 'Certifications' },
];

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <h2 className={styles.title}>About me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a Technical Program Manager who thrives at the intersection of
              engineering execution and cross-team alignment. I've spent my
              career driving complex technical programs at{' '}
              <strong>SiriusXM</strong> and <strong>Amazon</strong>,
              coordinating across distributed teams to ship products that reach
              millions.
            </p>
            <p>
              What sets me apart is my cross-cultural communication background.
              I'm a native <strong>English</strong> and <strong>Hindi</strong>{' '}
              speaker, professionally fluent in <strong>Japanese</strong> — which
              I used in my role at Amazon to support Japanese stakeholder
              research — and conversationally fluent in{' '}
              <strong>Korean</strong>, <strong>Thai</strong>, and{' '}
              <strong>Chinese</strong>. This gives me a unique ability to build
              trust and collaborate effectively with global engineering and
              research groups.
            </p>
            <p>
              Outside of work, I'm passionate about languages and culture.
              You'll also find me upside down at aerial yoga or halfway up a
              bouldering wall.
            </p>
          </div>
          <div className={styles.highlights}>
            {highlights.map((h) => (
              <div key={h.label} className={styles.stat}>
                <span className={styles.number}>{h.number}</span>
                <span className={styles.label}>{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
