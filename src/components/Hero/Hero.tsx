// src/components/Hero/Hero.tsx (UPDATED FOR JS HOVER EFFECT)
import React, { useState, useRef, useEffect } from 'react'; // Add useState
import styles from './Hero.module.css';
import Button from '../Button';
import { personalInfo } from '../../data/personalInfo';
import { SECTION_IDS, HERO_TAGLINE } from '../../utils/constants';
// No need for useIntersectionObserver or useActiveSection in this snippet,
// but keep them imported in your full file if Home.tsx uses them.

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  // State for hover effect for each button
  const [isViewMyWorkHovered, setIsViewMyWorkHovered] = useState(false);
  const [isAboutMeHovered, setIsAboutMeHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', `#${id}`);
    }
  };

  // Define base button styles
  const baseButtonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: '3px solid white',
    borderRadius: '30%',
    padding: '10px',
    color: 'white',
    fontWeight: 'bold',
    zIndex: 1000,
    transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease', // Add transition
  };

  // Define hover styles
  const hoverButtonStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // Subtle white fill on hover
    border: '3px solid rgba(255, 255, 255, 0.6)', // Border becomes more defined on hover
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow on hover (adjust as needed)
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.name}>{personalInfo.name}</h1>
        <h2 className={styles.tagline}>{HERO_TAGLINE}</h2>
        <p className={styles.description}>
          Crafting clear, compelling content that drives results. From UX
          writing to creative storytelling, I help brands connect with their
          audiences through strategic, well-crafted words.
        </p>
        <div className={styles.buttonGroup}>
          <Button
            variant="primary"
            onClick={() => scrollToSection(SECTION_IDS.STRATEGIC_CONTENT)}
            style={{ ...baseButtonStyle, ...(isViewMyWorkHovered ? hoverButtonStyle : {}) }}
            onMouseEnter={() => setIsViewMyWorkHovered(true)}
            onMouseLeave={() => setIsViewMyWorkHovered(false)}
          >
            View My Work
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollToSection(SECTION_IDS.ABOUT)}
            style={{ ...baseButtonStyle, ...(isAboutMeHovered ? hoverButtonStyle : {}) }}
            onMouseEnter={() => setIsAboutMeHovered(true)}
            onMouseLeave={() => setIsAboutMeHovered(false)}
          >
            About Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;