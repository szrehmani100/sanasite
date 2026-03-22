import styles from './Education.module.css';

function Education() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.school}>
          <div className={styles.left}>
            <h3>Georgia State University</h3>
            <p className={styles.college}>J. Mack Robinson College of Business</p>
          </div>
          <div className={styles.right}>
            <span className={styles.degree}>B.B.A. in Computer Information Systems</span>
            <span className={styles.location}>Atlanta, Georgia</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
