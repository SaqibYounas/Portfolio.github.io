import Header from '../components/Header';
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
    <div className="bg-gray-900 text-white flex flex-col items-center px-6 py-16">
      <Header />
      <AboutHero />
      <ExperienceSection />
      <EducationSkillsSection />
      <CertificationsProjects />
    </div>
  );
}
