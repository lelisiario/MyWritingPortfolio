// src/components/StrategicContent/StrategicContent.tsx
import React from 'react';
import styles from './StrategicContent.module.css';
import { portfolioData } from '../../data/portfolioData';
import { ProjectCategory } from '../../types/portfolio';
import PortfolioCard from '../PortfolioCard'; // Import the reusable PortfolioCard

interface StrategicContentProps {}

const StrategicContent: React.FC<StrategicContentProps> = () => {
  // Filter portfolioData to get only strategic content projects
  const strategicProjects = portfolioData.filter(
    (project) => project.category === ProjectCategory.STRATEGIC_CONTENT
  );

  return (
    <div className={styles.strategicContent}>
      <div className={styles.cardsGrid}>
        {strategicProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default StrategicContent;