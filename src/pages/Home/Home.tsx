// src/pages/Home/Home.tsx
import React, { useRef, useEffect } from 'react';
import styles from './Home.module.css';
// Import all section components (will populate these later)
import Hero from '../../components/Hero';
import StrategicContent from '../../components/StrategicContent';
import CreativeWork from '../../components/CreativeWork';
import About from '../../components/About';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useActiveSection } from '../../context/ActiveSectionContext';
import { SECTION_IDS, ARTICLES_HEADING, STRATEGIC_CONTENT_HEADING, CREATIVE_WORK_HEADING, ABOUT_HEADING, CONTACT_HEADING } from '../../utils/constants';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { setActiveSectionId } = useActiveSection();

  // Refs for each section to observe for active navigation highlighting
  const [heroRef, isHeroIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const [strategicContentRef, isStrategicContentIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const [creativeWorkRef, isCreativeWorkIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const [aboutRef, isAboutIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const [articlesRef, isArticlesIntersecting] = useIntersectionObserver({ threshold: 0.5 }); // For "Latest Insights"
  const [contactRef, isContactIntersecting] = useIntersectionObserver({ threshold: 0.5 }); // Assuming a contact section is at the bottom

  // Effect to update the active section based on intersection
  useEffect(() => {
    // Order matters for priority if multiple sections are visible
    if (isContactIntersecting) {
      setActiveSectionId(SECTION_IDS.CONTACT);
    } else if (isArticlesIntersecting) {
      setActiveSectionId(SECTION_IDS.ARTICLES);
    } else if (isAboutIntersecting) {
      setActiveSectionId(SECTION_IDS.ABOUT);
    } else if (isCreativeWorkIntersecting) {
      setActiveSectionId(SECTION_IDS.CREATIVE_WORK);
    } else if (isStrategicContentIntersecting) {
      setActiveSectionId(SECTION_IDS.STRATEGIC_CONTENT);
    } else if (isHeroIntersecting) {
      setActiveSectionId(SECTION_IDS.HOME);
    }
  }, [
    isHeroIntersecting,
    isStrategicContentIntersecting,
    isCreativeWorkIntersecting,
    isAboutIntersecting,
    isArticlesIntersecting,
    isContactIntersecting,
    setActiveSectionId,
  ]);

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section id={SECTION_IDS.HOME} ref={heroRef} className={styles.heroSectionWrapper}>
        <Hero />
      </section>

      {/* Strategic Content Section */}
      <section id={SECTION_IDS.STRATEGIC_CONTENT} ref={strategicContentRef} className={styles.sectionPadding}>
        <div className="container">
          <h2 className="section-heading">{STRATEGIC_CONTENT_HEADING}</h2>
          <p className="section-subheading">UX writing, content strategy, and technical documentation that enhances user experience and drives business objectives.</p>
          <StrategicContent />
        </div>
      </section>

      {/* Creative Work Section */}
      <section id={SECTION_IDS.CREATIVE_WORK} ref={creativeWorkRef} className={`${styles.sectionPadding} ${styles.darkSection}`}>
        <div className="container">
          <h2 className="section-heading" style={{ color: 'var(--color-text-on-dark)' }}>{CREATIVE_WORK_HEADING}</h2>
          <p className="section-subheading" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Storytelling, brand voice development, and creative content that showcases versatility and imaginative thinking.</p>
          <CreativeWork />
        </div>
      </section>

      {/* About Section */}
      <section id={SECTION_IDS.ABOUT} ref={aboutRef} className={styles.sectionPadding}>
        <div className="container">
          <h2 className="section-heading">{ABOUT_HEADING}</h2>
          <About />
        </div>
      </section>

      {/* Articles / Latest Insights Section */}
      <section id={SECTION_IDS.ARTICLES} ref={articlesRef} className={styles.sectionPadding}>
        <div className="container">
          <h2 className="section-heading">{ARTICLES_HEADING}</h2>
          <p className="section-subheading">Thoughts on content strategy, UX writing, and the evolving landscape of digital communication.</p>
          {/* This will render the latest articles using PortfolioCard */}
          {/* We will add the logic for this when we populate PortfolioCard */}
          <div>Articles Placeholder - Will display PortfolioCards here</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id={SECTION_IDS.CONTACT} ref={contactRef} className={`${styles.sectionPadding} ${styles.darkSection}`}>
        <div className="container">
          <h2 className="section-heading" style={{ color: 'var(--color-text-on-dark)' }}>{CONTACT_HEADING}</h2>
          <p className="section-subheading" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Ready to collaborate? Reach out to me!</p>
          {/* Contact form or info will go here */}
          <div>Contact Info Placeholder</div>
        </div>
      </section>
    </div>
  );
};

export default Home;