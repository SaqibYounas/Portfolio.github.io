'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { experienceData } from '../../data/About/experience';

export default function ExperienceSection() {
  return (
    <section className="mt-20 w-full max-w-6xl space-y-10 px-4 sm:px-6 lg:px-0">
      <motion.h2
        className="mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Experience
      </motion.h2>

      <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 20px rgba(168, 85, 247, 0.3)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="rounded-2xl border border-gray-700 bg-gray-800/50 p-5 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-purple-500 hover:bg-cyan-500/10 sm:p-6"
          >
            <h3 className="text-lg font-semibold text-blue-400 sm:text-xl">
              {exp.role}
            </h3>
            <p className="mb-1 text-sm text-gray-400">{exp.company}</p>
            <p className="mb-1 text-xs text-gray-500">📍 {exp.location}</p>
            <p className="mb-3 text-xs text-gray-500">📅 {exp.duration}</p>

            <ul className="ml-4 list-disc space-y-2 text-sm text-gray-300 sm:ml-5">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-gray-400">
              <span className="font-semibold text-purple-400">
                Technologies Used:
              </span>{' '}
              {exp.technologies}
            </p>

            <div className="mt-5 flex justify-center sm:justify-start">
              <Link
                href={exp.certificate}
                target="_blank"
                className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 sm:text-base"
              >
                View Certificate
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
