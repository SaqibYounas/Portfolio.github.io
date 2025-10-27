'use client';
import { motion } from 'framer-motion';
import {
  educationData,
  skillCategories,
} from '../../data/About/educationSkills';

export default function EducationSkillsSection() {
  return (
    <section className="mt-20 w-full max-w-6xl space-y-10 px-4 sm:px-6 lg:px-0">
      <motion.h2
        className="mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Education & Skills
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 20px rgba(6, 182, 212, 0.3)',
          }}
          className="rounded-2xl border border-gray-700 bg-gray-800/50 p-6 text-gray-300 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-purple-500 hover:bg-cyan-500/10"
        >
          <h3 className="mb-4 text-xl font-semibold text-blue-400">
            {educationData.degree}
          </h3>
          <div className="mb-4 border-b border-gray-700"></div>

          <p className="text-gray-400">{educationData.institution}</p>

          <div className="mt-3 text-sm text-gray-300">
            <p>📅 {educationData.duration}</p>
            <p>📍 {educationData.location}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 20px rgba(6, 182, 212, 0.3)',
          }}
          className="rounded-2xl border border-gray-700 bg-gray-800/50 p-6 text-gray-300 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-purple-500 hover:bg-cyan-500/10"
        >
          <h3 className="mb-4 text-xl font-semibold text-blue-400">
            Technical Skills
          </h3>
          <div className="mb-4 border-b border-gray-700"></div>

          <ul className="space-y-3">
            {skillCategories.map((category, index) => (
              <li
                key={index}
                className="border-b border-gray-700 pb-3 last:border-none"
              >
                <span className="font-semibold text-purple-400">
                  {category.title}:
                </span>{' '}
                {category.items.join(', ')}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
