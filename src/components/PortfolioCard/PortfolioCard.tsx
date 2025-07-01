// src/components/PortfolioCard/PortfolioCard.tsx (FULL CONTENT)
import React from 'react';
import styles from './PortfolioCard.module.css';
import type { Project, Tag } from '../../types/portfolio'; // Use type-only import for Project and Tag
import Button from '../Button'; // Assuming Button component is correctly set up

interface PortfolioCardProps {
  project: Project;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  return (
    <div className={styles.portfolioCard}>
      <div className={styles.thumbnailContainer}>
        <img src={project.thumbnail} alt={project.title} className={styles.thumbnail} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{project.title}</h3>
        {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag: Tag) => (
            <span key={tag.id} className={styles.tag}>{tag.name}</span>
          ))}
        </div>
        <div className={styles.cardFooter}>
          {project.readTime && <span className={styles.readTime}>{project.readTime}</span>}
          <div className={styles.buttonGroup}>
            {/* Link to the ProjectDetail page */}
            <Button variant="primary" link={`/project/${project.id}`}>
              {project.viewButtonText}
            </Button>
            {/* Download PDF button */}
            <Button variant="secondary" link={project.pdfPath} target="_blank" download={`${project.id}.pdf`}>
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;