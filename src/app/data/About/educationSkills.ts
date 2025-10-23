import { Education, SkillCategory } from '../../types/About/educationskills';

export const educationData: Education = {
  degree: "Bachelor's Degree in Information Technology (BSIT) — In Progress",
  institution: 'The Superior University, Lahore',
  duration: '2023 – 2027',
  location: 'Lahore, Pakistan',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap 5'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Tools',
    items: ['Docker', 'Git', 'AWS', 'Vercel', 'Render'],
  },
  {
    title: 'Testing',
    items: ['Jest', 'Vitest', 'Postman', 'RTL'],
  },
];
