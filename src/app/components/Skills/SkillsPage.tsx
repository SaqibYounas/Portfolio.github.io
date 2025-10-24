'use client';

import { motion } from 'framer-motion';
import type { SkillsClientProps } from '../../types/other/skills';

export default function SkillsClient({ skillSections }: SkillsClientProps) {
  return (
    <section className="min-h-screen w-full bg-gray-900 px-4 text-white sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:gap-12">
        {skillSections.map((section, index) => (
          <motion.div
            key={index}
            className="flex flex-col rounded-2xl border border-gray-700 bg-gray-800/50 p-5 text-gray-300 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-purple-500 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] sm:p-6 md:p-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
          >
            <h2
              className={`mb-5 bg-gradient-to-r bg-clip-text text-lg font-semibold text-transparent sm:text-xl md:text-2xl ${section.color}`}
            >
              {section.title}
            </h2>

            <div className="flex flex-wrap items-start gap-3 sm:gap-4">
              {section.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex min-w-[120px] items-center justify-start gap-2 rounded-lg bg-gray-700/50 px-3 py-2 text-xs transition-all duration-300 hover:bg-cyan-500/20 sm:text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-xl sm:text-2xl md:text-3xl">
                    {skill.icon}
                  </span>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
