'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { certificationsData } from '../../data/About/certificateProjects';

export default function CertificationsProjects() {
  const { certificates, projects } = certificationsData;

  return (
    <section className="mx-auto mt-20 w-full max-w-6xl space-y-10 px-4 sm:px-6 lg:px-0">
      <motion.h2
        className="mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Certifications & Projects
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
          className="relative rounded-2xl border border-gray-700 bg-gray-800/50 p-6 text-gray-300 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-purple-500 hover:bg-cyan-500/10"
        >
          <h3 className="mb-4 text-left text-xl font-semibold text-blue-400">
            Certifications
          </h3>

          <ul className="space-y-4 text-gray-300">
            {certificates.map((cert, i) => (
              <li
                key={i}
                className="flex flex-col gap-3 border-b border-gray-700 pb-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-purple-300 sm:text-base">
                    {cert.title}
                  </p>
                  <p className="pt-2 text-xs text-gray-500 sm:text-sm">
                    {cert.date}
                  </p>
                </div>

                <div className="mt-5 flex justify-center sm:justify-start">
                  <Link
                    href={cert.pdf}
                    target="_blank"
                    className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 sm:text-base"
                  >
                    View Certificate
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 20px rgba(6, 182, 212, 0.3)',
          }}
          className="relative rounded-2xl border border-gray-700 bg-gray-800/50 p-6 text-gray-300 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-purple-500 hover:bg-cyan-500/10"
        >
          <h3 className="mb-4 text-left text-xl font-semibold text-blue-400">
            Highlighted Projects
          </h3>

          <ul className="ml-4 list-disc space-y-3 text-gray-300">
            {projects.map((project, i) => (
              <li key={i}>
                <span className="font-semibold text-purple-400">
                  {project.name}:
                </span>{' '}
                {project.description}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
