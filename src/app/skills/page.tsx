import Header from '../components/Navbar/Header';
import SkillsClient from '../components/Skills/SkillsPage';
import { skillSections } from '../data/other/skills';

export default function SkillsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-6 py-16 text-white">
      <h1 className="mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
        My Skills
      </h1>
      <Header />
      <SkillsClient skillSections={skillSections} />
    </main>
  );
}
