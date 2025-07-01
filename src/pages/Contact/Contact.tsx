// src/pages/Contact/Contact.tsx (CORRECTED)
import React from 'react';
import styles from './Contact.module.css';
import { personalInfo } from '../../data/personalInfo';
import { CONTACT_HEADING } from '../../utils/constants'; // Import CONTACT_HEADING from constants

const Contact: React.FC = () => {
  return (
    <div className={`${styles.contactPage} container`}>
      <h1 className="section-heading">{CONTACT_HEADING}</h1> {/* Use the constant here */}
      <p className="section-subheading">Ready to collaborate? Reach out to me!</p>
      <div className={styles.contactInfo}>
        <p>Email: <a href={`mailto:${personalInfo.email}`} className={styles.contactLink}>{personalInfo.email}</a></p>
        <p>LinkedIn: <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Connect on LinkedIn</a></p>
        {/* You could add a contact form component here later */}
      </div>
    </div>
  );
};

export default Contact;