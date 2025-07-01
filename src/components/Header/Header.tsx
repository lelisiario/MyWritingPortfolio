// src/components/Header/Header.tsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { personalInfo } from '../../data/personalInfo';
import { SECTION_IDS } from '../../utils/constants';
import { useActiveSection } from '../../context/ActiveSectionContext';
// import Button from '../Button';

interface NavLink {
  id: string; // Corresponds to SECTION_IDS
  label: string;
  path: string; // Path for React Router if it's a separate page, or '#' for scroll
}

const Header: React.FC = () => {
  const location = useLocation();
  const { activeSectionId, setActiveSectionId } = useActiveSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { id: SECTION_IDS.HOME, label: 'Home', path: '/' },
    { id: SECTION_IDS.STRATEGIC_CONTENT, label: 'Strategic Content', path: `/#${SECTION_IDS.STRATEGIC_CONTENT}` },
    { id: SECTION_IDS.CREATIVE_WORK, label: 'Creative Work', path: `/#${SECTION_IDS.CREATIVE_WORK}` },
    { id: SECTION_IDS.ABOUT, label: 'About', path: `/#${SECTION_IDS.ABOUT}` },
    { id: SECTION_IDS.ARTICLES, label: 'Articles', path: `/#${SECTION_IDS.ARTICLES}` }, // Updated from Blog
    { id: SECTION_IDS.CONTACT, label: 'Contact', path: `/#${SECTION_IDS.CONTACT}` },
  ];

  // Effect to handle initial active section based on URL hash
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      if (Object.values(SECTION_IDS).includes(sectionId)) {
        setActiveSectionId(sectionId);
      }
    } else {
      setActiveSectionId(SECTION_IDS.HOME);
    }
  }, [location.hash, setActiveSectionId]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', `#${id}`); // Update URL hash without full reload
      setActiveSectionId(id);
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerContent}`}>
        <Link to="/" className={styles.logo} onClick={() => setActiveSectionId(SECTION_IDS.HOME)}>
          {personalInfo.name}
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu} aria-expanded={isMobileMenuOpen} aria-label="Toggle navigation menu">
          ☰
        </button>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                {link.path.startsWith('/#') ? (
                  <a
                    href={link.path}
                    className={`${styles.navLink} ${activeSectionId === link.id ? styles.active : ''}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`${styles.navLink} ${activeSectionId === link.id ? styles.active : ''}`}
                    onClick={() => setActiveSectionId(link.id)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;