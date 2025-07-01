// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';
import { personalInfo } from '../../data/personalInfo';
import { COPYRIGHT_TEXT } from '../../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerContent}`}>
        <div className={styles.links}>
          <a href={personalInfo.resumePdf} target="_blank" rel="noopener noreferrer" className={styles.footerLink} download={`${personalInfo.name.replace(/\s/g, '-')}-Resume.pdf`}>Resume</a>
          <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
          <span className={styles.footerLink}>{personalInfo.email}</span> {/* Email as text */}
        </div>
        <p className={styles.copyright}>{COPYRIGHT_TEXT}</p>
      </div>
    </footer>
  );
};

export default Footer;