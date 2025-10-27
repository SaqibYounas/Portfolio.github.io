import { PortfolioData } from '../../types/Projects/portfolio';

export const portfolioData: PortfolioData = {
  codedynamo: 'personal-portfolio',
  title: 'Personal Portfolio Website (v1.0)',
  commingsoon: '#',

  introduction: `This is my personal developer portfolio website a modern, fully responsive platform built using Next.js and Tailwind CSS. 
  It showcases my journey as a Full Stack Developer, featuring my projects, technical skills, resume, and contact information in a visually engaging and performant design.`,

  problemStatement: `Many developers struggle to present their work in a professional, scalable, and SEO-friendly way. 
  Static portfolios lack interactivity, performance optimization, and proper deployment pipelines for continuous updates.`,

  objectives: [
    'Build a dynamic and scalable portfolio using Next.js App Router.',
    'Ensure SEO optimization and rich metadata for social sharing.',
    'Implement smooth animations using Framer Motion.',
    'Make it responsive across all device sizes.',
    'Deploy using CI/CD pipelines for continuous updates.',
    'Integrate Docker for consistent development environments.',
    'Add unit and integration testing using Jest and Testing Library.',
  ],

  features: [
    'Fully responsive and modern UI using Tailwind CSS.',
    'SEO optimized with Open Graph and Twitter cards.',
    'Dynamic project pages using static generation (SSG).',
    'Smooth animations powered by Framer Motion.',
    'Dockerized setup for easy deployment and scaling.',
    'CI/CD pipeline implemented with GitHub Actions and Vercel.',
    'Code quality tools: ESLint, Prettier, and Husky for pre-commit checks.',
    'Unit testing configured with Jest and React Testing Library.',
  ],

  versionControl: {
    currentVersion: '1.0',
    futureUpdates: [],
  },

  techStack: [
    'Next.js 15 (App Router)',
    'React.js 19',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Docker',
    'Jest',
    'React Testing Library',
    'Prettier',
    'ESLint',
    'Husky',
    'GitHub Actions (CI/CD)',
    'Vercel Deployment',
  ],

  carouselImages: [
    '/Projects/Portfolio Images/Portfolio-1.PNG',
    '/Projects/Portfolio Images/Portfolio-2.PNG',
    '/Projects/Portfolio Images/Portfolio-3.PNG',
    '/Projects/Portfolio Images/Portfolio-4.PNG',
    '/Projects/Portfolio Images/Portfolio-5.PNG',
    '/Projects/Portfolio Images/Portfolio-6.PNG',
  ],
};
