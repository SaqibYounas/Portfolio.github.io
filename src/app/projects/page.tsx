// app/projects/page.tsx
import Header from '../components/Header';
import ProjectsGrid from '../components/Projects/ProjectsGrid'; // client component

// Example projects data (static)
const projects = [
  {
    title: 'Weather App',
    description:
      'A modern weather forecasting app built with HTML, CSS, and JavaScript. It fetches live weather data using APIs and displays temperature, humidity, and wind speed with a responsive UI.',
    image: '/weather-app.jpg',
  },
  {
    title: 'Calculator App',
    description:
      'A responsive and interactive calculator built using HTML, CSS, and JavaScript with support for basic arithmetic operations and keyboard input.',
    image: '/calculator.jpg',
  },
  {
    title: 'Portfolio Website',
    description:
      'A sleek personal portfolio built with Next.js, Tailwind CSS, and Framer Motion — showcasing projects, skills, and contact information.',
    image: '/portfolio.jpg',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-16">
      <Header />
      <ProjectsGrid projects={projects} />
    </div>
  );
}
