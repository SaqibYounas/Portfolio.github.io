import Header from '../components/Header';
import SkillsClient from '../components/Skills/SkillsPage';
import { skillSections } from '../data/skills';

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-8 py-16">
      <Header />
      <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
        My Skills
      </h1>

      {/* Client Component */}
      <SkillsClient skillSections={skillSections} />
    </div>
  );
}
