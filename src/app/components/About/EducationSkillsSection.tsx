'use client';
import { motion } from 'framer-motion';

export default function EducationSkillsSection() {
  return (
    <section className="mt-20 w-full max-w-6xl space-y-10">
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
          <h3 className="text-xl font-semibold text-blue-400">
            Bachelor&apos;s Degree in Information Technology (BSIT) — In
            Progress
          </h3>
          <p className="mt-1 text-gray-400">The Superior University, Lahore</p>

          <div className="mt-3 text-sm text-gray-500">
            <p>📅 2023 – 2027</p>
            <p>📍 Lahore, Pakistan</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 20px rgba(6, 182, 212, 0.3)',
          }}
          className="rounded-2xl border border-gray-700 bg-gray-800/50 p-6 text-gray-300 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-purple-500 hover:bg-cyan-500/10"
        >
          <h3 className="mb-3 text-xl font-semibold text-blue-400">
            Technical Skills
          </h3>

          <p>
            <span className="font-semibold text-purple-400">Frontend:</span>{' '}
            React.js, Next.js, Tailwind CSS, Bootstrap 5
          </p>
          <p>
            <span className="font-semibold text-purple-400">Backend:</span>{' '}
            Node.js, Express.js, REST APIs, GraphQL
          </p>
          <p>
            <span className="font-semibold text-purple-400">Databases:</span>{' '}
            PostgreSQL, MongoDB, Redis
          </p>
          <p>
            <span className="font-semibold text-purple-400">Tools:</span>{' '}
            Docker, Git, AWS, Vercel, Render
          </p>
          <p>
            <span className="font-semibold text-purple-400">Testing:</span>{' '}
            Jest, Vitest, Postman, RTL
          </p>
        </motion.div>
      </div>
    </section>
  );
}
