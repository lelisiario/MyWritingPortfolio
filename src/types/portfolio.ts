// src/types/portfolio.ts

/**
 * @enum ProjectCategory
 * @description Defines the categories for portfolio projects.
 */
export const ProjectCategory = {
  STRATEGIC_CONTENT: 'strategic-content',
  CREATIVE_WORK: 'creative-work',
  ARTICLE: 'article', // For general articles/insights
} as const;

export type ProjectCategory = typeof ProjectCategory[keyof typeof ProjectCategory];

/**
 * @interface Tag
 * @description Defines the structure for project tags (e.g., UX Writing, SEO).
 */
export interface Tag {
  id: string;
  name: string;
}

/**
 * @interface Project
 * @description Defines the structure for a single portfolio project or article.
 */
export interface Project {
  id: string; // Unique identifier (e.g., 'chatbot-optimization')
  category: ProjectCategory; // The main category (Strategic, Creative, Article)
  title: string; // Main title
  subtitle?: string; // Optional subtitle/brief line for cards
  description: string; // Detailed description for the card view
  fullContent?: string; // Full HTML content for the dedicated project detail page
  thumbnail: string; // Path to the thumbnail image in public/assets/images/portfolio-thumbnails/
  pdfPath: string; // Path to the downloadable PDF in public/assets/pdfs/portfolio-samples/
  tags: Tag[]; // Array of tags
  readTime?: string; // Optional estimated reading time (e.g., "3 min read")
  viewButtonText: string; // Text for the "View" button on the card
  date?: string; // Optional: for articles or dated projects (e.g., "June 15, 2025")
}