'use client';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section className="mt-20 w-full max-w-6xl space-y-10 px-4 sm:px-6 lg:px-0">
      <h2 className="mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl">
        Experience
      </h2>

      <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 20px rgba(168, 85, 247, 0.3)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="rounded-2xl border border-gray-700 bg-gray-800/50 p-5 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-purple-500 hover:bg-cyan-500/10 sm:p-6"
        >
          <h3 className="text-lg font-semibold text-blue-400 sm:text-xl">
            Frontend Developer Intern
          </h3>
          <p className="mb-1 text-sm text-gray-400">Appaura | Remote</p>
          <p className="mb-1 text-xs text-gray-500">📍 Lahore, Pakistan</p>
          <p className="mb-3 text-xs text-gray-500">📅 July 2025 – Sep 2025</p>

          <ul className="ml-4 list-disc space-y-2 text-sm text-gray-300 sm:ml-5">
            <li>Built responsive web interfaces using React.js.</li>
            <li>Translated design mockups into functional components.</li>
            <li>Debugged and optimized frontend code for performance.</li>
            <li>Integrated APIs and joined code reviews.</li>
          </ul>

          <p className="mt-4 text-sm text-gray-400">
            <span className="font-semibold text-purple-400">
              Technologies Used:
            </span>{' '}
            React.js, JavaScript (ES6+), HTML5, CSS3, Git
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 20px rgba(168, 85, 247, 0.3)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="rounded-2xl border border-gray-700 bg-gray-800/50 p-5 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-purple-500 hover:bg-cyan-500/10 sm:p-6"
        >
          <h3 className="text-lg font-semibold text-blue-400 sm:text-xl">
            Backend Developer Intern
          </h3>
          <p className="mb-1 text-sm text-gray-400">TechTommy | Remote</p>
          <p className="mb-1 text-xs text-gray-500">📍 Lahore, Pakistan</p>
          <p className="mb-3 text-xs text-gray-500">
            📅 August 2025 – Sep 2025
          </p>

          <ul className="ml-4 list-disc space-y-2 text-sm text-gray-300 sm:ml-5">
            <li>
              Created REST APIs using Node.js, Express.js, and PostgreSQL.
            </li>
            <li>Designed and implemented database schemas for performance.</li>
            <li>Integrated backend services with frontend features.</li>
            <li>Worked on deployment and Git version control.</li>
          </ul>

          <p className="mt-4 text-sm text-gray-400">
            <span className="font-semibold text-purple-400">
              Technologies Used:
            </span>{' '}
            Node.js, Express.js, PostgreSQL, Supabase, Git
          </p>
        </motion.div>
      </div>
    </section>
  );
}
