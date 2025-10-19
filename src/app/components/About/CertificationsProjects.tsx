'use client';
import { motion } from 'framer-motion';

export default function CertificationsProjects() {
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
          <ul className="space-y-3 text-gray-300">
            {[
              ['SQL (Basic) — HackerRank', '📅 Sep 2025'],
              ['SQL (Intermediate) — HackerRank', '📅 Sep 2025'],
              ['CSS (Basic) — HackerRank', '📅 Sep 2025'],
              ['JavaScript (Basic) — HackerRank', '📅 Oct 2025'],
            ].map(([title, date], i) => (
              <li
                key={i}
                className="flex flex-wrap items-center justify-between gap-x-2 text-sm sm:text-base"
              >
                <span className="truncate">{title}</span>
                <span className="mt-1 w-full text-[10px] text-gray-500 sm:mt-0 sm:w-auto sm:text-sm">
                  {date}
                </span>
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
            <li>
              <span className="font-semibold text-purple-400">
                Weather Forecast App:
              </span>{' '}
              Built with React.js, Tailwind CSS, and OpenWeather API.
            </li>
            <li>
              <span className="font-semibold text-purple-400">
                Information Display Page:
              </span>{' '}
              Developed using React.js & Bootstrap 5.
            </li>
            <li>
              <span className="font-semibold text-purple-400">
                Role-Based Service Platform:
              </span>{' '}
              Full-stack app using React, Express, MongoDB, Redis, and OAuth.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
