// src/data/portfolioData.ts
import type { Project } from "../types/portfolio";
import { ProjectCategory } from "../types/portfolio";
export const portfolioData: Project[] = [
  // --- Strategic Content Projects ---
  {
    id: "chatbot-optimization",
    category: ProjectCategory.STRATEGIC_CONTENT,
    title: "Chatbot Conversation Optimization",
    subtitle: "UX Writing - Content Strategy",
    description: "Complete redesign of customer support chatbot flows, reducing user confusion by 40% and increasing successful resolution rates through clearer, more empathetic messaging.",
    fullContent: "<p>Detailed content for Chatbot Optimization project goes here. This could be rich HTML or Markdown that you'll render.</p><p>This project focused on improving user experience...</p>", // Placeholder
    thumbnail: "/assets/images/portfolio-thumbnails/chatbot-optimization.jpg",
    pdfPath: "/assets/pdfs/portfolio-samples/chatbot-case-study.pdf",
    tags: [
      { id: "ux-writing", name: "UX Writing" },
      { id: "chatbot-design", name: "Chatbot Design" },
      { id: "customer-support", name: "Customer Support" },
    ],
    readTime: "3 min read",
    viewButtonText: "View Full Case Study",
  },
  {
    id: "help-center-audit",
    category: ProjectCategory.STRATEGIC_CONTENT,
    title: "Help Center Content Audit",
    subtitle: "Content Strategy - Information Architecture",
    description: "Comprehensive audit and restructuring of 200+ help articles implementing user-centered categorization and search optimization that improved findability by 60%.",
    fullContent: "<p>Detailed content for Help Center Content Audit project goes here.</p>", // Placeholder
    thumbnail: "/assets/images/portfolio-thumbnails/help-center-audit.jpg",
    pdfPath: "/assets/pdfs/portfolio-samples/help-center-audit.pdf",
    tags: [
      { id: "content-audit", name: "Content Audit" },
      { id: "information-architecture", name: "Information Architecture" },
      { id: "seo", name: "SEO" },
    ],
    readTime: "5 min read",
    viewButtonText: "View Analysis",
  },
  {
    id: "api-documentation",
    category: ProjectCategory.STRATEGIC_CONTENT,
    title: "API Documentation Redesign",
    subtitle: "Technical Writing - Developer Experience",
    description: "Transformed complex API documentation into clear, actionable guides with code examples and interactive elements, reducing developer onboarding time by 50%.",
    fullContent: "<p>Detailed content for API Documentation Redesign project goes here.</p>", // Placeholder
    thumbnail: "/assets/images/portfolio-thumbnails/api-documentation.jpg",
    pdfPath: "/assets/pdfs/portfolio-samples/api-documentation.pdf",
    tags: [
      { id: "technical-writing", name: "Technical Writing" },
      { id: "api-documentation", name: "API Documentation" },
      { id: "developer-experience", name: "Developer Experience" },
    ],
    readTime: "4 min read",
    viewButtonText: "View Documentation",
  },
  {
    id: "email-campaign-optimization",
    category: ProjectCategory.STRATEGIC_CONTENT,
    title: "Email Campaign Optimization",
    subtitle: "Email Marketing - A/B Testing",
    description: "Strategic email campaign redesign with personalized messaging and optimized CTAs, resulting in 35% higher open rates and 50% increase in click-through rates.",
    fullContent: "<p>Detailed content for Email Campaign Optimization project goes here.</p>", // Placeholder
    thumbnail: "/assets/images/portfolio-thumbnails/email-campaign.jpg",
    pdfPath: "/assets/pdfs/portfolio-samples/email-campaign.pdf",
    tags: [
      { id: "email-marketing", name: "Email Marketing" },
      { id: "copywriting", name: "Copywriting" },
      { id: "ab-testing", name: "A/B Testing" },
    ],
    readTime: "3 min read",
    viewButtonText: "View Campaign",
  },

  // --- Creative Work Projects ---
  {
    id: "brand-voice-guide",
    category: ProjectCategory.CREATIVE_WORK,
    title: "Brand Voice Guide",
    subtitle: "Brand Strategy - Voice & Tone",
    description: "Comprehensive brand voice and tone guide for a fintech startup, defining personality, messaging framework, and practical examples across all customer touchpoints.",
    fullContent: "<p>Detailed content for Brand Voice Guide project goes here.</p>", // Placeholder
    thumbnail: "/assets/images/portfolio-thumbnails/placeholder-creative.jpg", // You'll need to add a thumbnail for this
    pdfPath: "/assets/pdfs/portfolio-samples/brand-voice-guide.pdf",
    tags: [
      { id: "brand-voice", name: "Brand Voice" },
      { id: "style-guide", name: "Style Guide" },
      { id: "messaging", name: "Messaging" },
    ],
    readTime: "5 min read",
    viewButtonText: "View Guide",
  },
  {
    id: "digital-disconnect-story",
    category: ProjectCategory.CREATIVE_WORK,
    title: "The Digital Disconnect",
    subtitle: "Ghost Story - Creative Writing",
    description: "A thought-provoking short story exploring the intersection of technology and human connection in our increasingly digital world. Winner of the 202X Tech Tales Writing Contest.",
    fullContent: "<p>Detailed content for The Digital Disconnect project goes here.</p>", // Placeholder
    thumbnail: "/assets/images/portfolio-thumbnails/placeholder-creative.jpg", // You'll need to add a thumbnail for this
    pdfPath: "/assets/pdfs/portfolio-samples/digital-disconnect-story.pdf",
    tags: [
      { id: "creative-writing", name: "Creative Writing" },
      { id: "short-fiction", name: "Short Fiction" },
      { id: "technology", name: "Technology" },
    ],
    readTime: "8 min read",
    viewButtonText: "Read Story",
  },
  {
    id: "social-media-campaign",
    category: ProjectCategory.CREATIVE_WORK,
    title: "Social Media Campaign",
    subtitle: "Social Media - Creative Strategy",
    description: "Multi-platform social media campaign concept for sustainable fashion brand, featuring creative storytelling and user-generated content strategy.",
    fullContent: "<p>Detailed content for Social Media Campaign project goes here.</p>", // Placeholder
    thumbnail: "/assets/images/portfolio-thumbnails/placeholder-creative.jpg", // You'll need to add a thumbnail for this
    pdfPath: "/assets/pdfs/portfolio-samples/social-campaign.pdf",
    tags: [
      { id: "social-media", name: "Social Media" },
      { id: "campaign-strategy", name: "Campaign Strategy" },
      { id: "sustainability", name: "Sustainabilit" },
    ],
    readTime: "6 min read",
    viewButtonText: "View Campaign",
  },
  {
    id: "newsletter-series",
    category: ProjectCategory.CREATIVE_WORK,
    title: "Newsletter Series",
    subtitle: "Content Marketing - Email Series",
    description: "Five-part newsletter series on productivity and remote work, combining personal insights with actionable advice and engaging storytelling techniques.",
    fullContent: "<p>Detailed content for Newsletter Series project goes here.</p>", // Placeholder
    thumbnail: "/assets/images/portfolio-thumbnails/placeholder-creative.jpg", // You'll need to add a thumbnail for this
    pdfPath: "/assets/pdfs/portfolio-samples/newsletter-series.pdf",
    tags: [
      { id: "newsletter", name: "Newsletter" },
      { id: "content-series", name: "Content Series" },
      { id: "productivity", name: "Productivity" },
    ],
    readTime: "5 min read",
    viewButtonText: "Read Series",
  },

  // --- Articles / Latest Insights ---
  // These will display in the "Latest Insights" section on Home,
  // and will be accessible via a generic ProjectDetail page.
  {
    id: "future-conversational-ux",
    category: ProjectCategory.ARTICLE, // New category for general articles
    title: "The Future of Conversational UX",
    date: "June 15, 2025",
    subtitle: "Thoughts on content strategy", // Using subtitle for excerpt on cards
    description: "How AI-powered interfaces are changing the way we think about user experience and content design.",
    fullContent: "<p>Full article content for 'The Future of Conversational UX' goes here. This can be extensive.</p>", // Placeholder
    thumbnail: "/assets/images/blog-images/placeholder-article.jpg", // You'll need to add a thumbnail for articles
    pdfPath: "/assets/pdfs/portfolio-samples/placeholder-article-1.pdf", // Placeholder PDF
    tags: [
      { id: "ai", name: "AI" },
      { id: "ux", name: "UX" },
      { id: "conversational-design", name: "Conversational Design" },
    ],
    readTime: "7 min read",
    viewButtonText: "Read Article",
  },
  {
    id: "content-operations-at-scale",
    category: ProjectCategory.ARTICLE,
    title: "Content Operations at Scale",
    date: "June 8, 2025",
    subtitle: "Building content systems",
    description: "Building systems and processes that maintain quality while scaling content production across teams.",
    fullContent: "<p>Full article content for 'Content Operations at Scale' goes here.</p>", // Placeholder
    thumbnail: "/assets/images/blog-images/placeholder-article.jpg",
    pdfPath: "/assets/pdfs/portfolio-samples/placeholder-article-2.pdf",
    tags: [
      { id: "content-strategy", name: "Content Strategy" },
      { id: "operations", name: "Operations" },
    ],
    readTime: "6 min read",
    viewButtonText: "Read Article",
  },
  {
    id: "measuring-content-success",
    category: ProjectCategory.ARTICLE,
    title: "Measuring Content Success",
    date: "May 20, 2025",
    subtitle: "Beyond vanity metrics",
    description: "Beyond vanity metrics: How to measure content effectiveness in ways that matter to your business...",
    fullContent: "<p>Full article content for 'Measuring Content Success' goes here.</p>", // Placeholder
    thumbnail: "/assets/images/blog-images/placeholder-article.jpg",
    pdfPath: "/assets/pdfs/portfolio-samples/placeholder-article-3.pdf",
    tags: [
      { id: "analytics", name: "Analytics" },
      { id: "roi", name: "ROI" },
    ],
    readTime: "5 min read",
    viewButtonText: "Read Article",
  },
];