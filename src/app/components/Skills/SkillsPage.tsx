'use client';

import { motion } from 'framer-motion';
import type { SkillSection } from '../../types/skills';

interface SkillsClientProps {
  skillSections: skillSections[];
}

export default function SkillsClient({ skillSections }: SkillsClientProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {skillSections.map((section, index) => (
        <motion.div
          key={index}
          className="bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-500"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.3, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
        >
          <h2
            className={`text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${section.color}`}
          >
            {section.title}
          </h2>

          <div className="flex flex-wrap gap-4">
            {section.skills.map((skill, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 bg-gray-700/50 px-3 py-2 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-2xl">{skill.icon}</span>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
