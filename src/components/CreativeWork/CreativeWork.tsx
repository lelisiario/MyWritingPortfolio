// src/components/CreativeWork/CreativeWork.tsx
import React from 'react';
import styles from './CreativeWork.module.css';
import { portfolioData } from '../../data/portfolioData';
import { ProjectCategory } from '../../types/portfolio';
import PortfolioCard from '../PortfolioCard'; // Import the reusable PortfolioCard

interface CreativeWorkProps {}

const CreativeWork: React.FC<CreativeWorkProps> = () => {
  // Filter portfolioData to get only creative work projects
  const creativeProjects = portfolioData.filter(
    (project) => project.category === ProjectCategory.CREATIVE_WORK
  );

  return (
    <div className={styles.creativeWork}>
      <div className={styles.cardsGrid}>
        {creativeProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default CreativeWork;