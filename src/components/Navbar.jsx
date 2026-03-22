import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          Sana Rehmani
        </a>
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.separator} />
          <li>
            <a
              href="https://www.linkedin.com/in/sana-rehmani/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
