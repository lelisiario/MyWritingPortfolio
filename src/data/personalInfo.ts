// src/data/personalInfo.ts

interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string; // For the About section
  profilePhoto: string; // Path to profile photo in public/assets/images/
  resumePdf: string; // Path to resume PDF in public/assets/pdfs/
  linkedinUrl: string;
  email: string;
}

export const personalInfo: PersonalInfo = {
  name: "Lauren Elisiario", // Replace with your actual name
  tagline: "Content Strategist & Writer", // Replace with your actual tagline
  bio: "Crafting clear, compelling content that drives results. From UX writing to creative storytelling, I help brands connect with their audiences through strategic, well-crafted words. After five years of freelance writing across diverse industries, I'm ready to bring my strategic content expertise to a full-time role. My background spans UX writing, technical documentation, brand storytelling, and content strategy. What sets me apart is my ability to balance analytical thinking, user empathy, data-driven insights, and a deep understanding of how content drives business outcomes. I'm particularly drawn to roles that combine content strategy, UX writing, and cross-functional collaboration – where I can help reduce user friction while maintaining brand voice and personality.", // Your 'About Me' text
  profilePhoto: "/assets/images/profile-photo.jpg", // Path from public/
  resumePdf: "/assets/pdfs/resume.pdf", // Path from public/
  linkedinUrl: "https://www.linkedin.com/in/your-linkedin-profile", // Replace with your LinkedIn URL
  email: "hello@youremail.com", // Replace with your actual email
};