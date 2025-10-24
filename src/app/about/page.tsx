import Header from '../components/Navbar/Header';
import AboutHero from '../components/About/AboutContent';
import ExperienceSection from '../components/About/ExperienceSection';
import EducationSkillsSection from '../components/About/EducationSkillsSection';
import CertificationsProjects from '../components/About/CertificationsProjects';

export const metadata = {
  title: 'About | Muhammad Saqib Younas',
  description:
    'Full Stack Developer based in Lahore, Pakistan — Learn more about my journey, skills, and projects.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center bg-gray-900 px-6 py-16 text-white">
      <h1 className="mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
        About Me
      </h1>
      <Header />
      <AboutHero />
      <ExperienceSection />
      <EducationSkillsSection />
      <CertificationsProjects />
    </div>
  );
}
