// src/pages/ProjectDetail/ProjectDetail.tsx (CORRECTED IMPORTS)
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProjectDetail.module.css';
import { portfolioData } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio'; // <--- ADD 'type' HERE
import Button from '../../components/Button';

// ... rest of ProjectDetail.tsx code (should be exactly what I provided before)
const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const foundProject = portfolioData.find(p => p.id === id);
      setProject(foundProject);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className={`${styles.projectDetail} container`}><p>Loading project details...</p></div>;
  }

  if (!project) {
    return (
      <div className={`${styles.projectDetail} container`}>
        <h1 className={styles.errorHeading}>Project Not Found</h1>
        <p>The project or article you are looking for does not exist.</p>
        <Link to="/" className={styles.backLink}>Go to Home</Link>
      </div>
    );
  }

  return (
    <div className={`${styles.projectDetail} container`}>
      <div className={styles.headerArea}>
        <h1 className={styles.title}>{project.title}</h1>
        {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
        <div className={styles.tags}>
          {project.tags.map(tag => (
            <span key={tag.id} className={styles.tag}>{tag.name}</span>
          ))}
        </div>
        <div className={styles.actionButtons}>
          {project.readTime && <span className={styles.readTime}>{project.readTime}</span>}
          <Button variant="primary" link={project.pdfPath} target="_blank" download={`${project.id}.pdf`}>
            Download PDF
          </Button>
        </div>
      </div>

      <div className={styles.contentArea}>
        {project.fullContent ? (
          <div dangerouslySetInnerHTML={{ __html: project.fullContent }} />
        ) : (
          <p>Full content for this project/article is coming soon. For now, please download the PDF.</p>
        )}
      </div>

      <div className={styles.backButtonContainer}>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;