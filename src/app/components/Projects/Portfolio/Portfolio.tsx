'use client';

import { motion } from 'framer-motion';
import Carousel from '../../Sidebar/SideBar';
import Link from 'next/link';
import { PortfolioData } from '../../../types/Projects/portfolio';

export default function PortfolioDisplayClient({
  data,
}: {
  data: PortfolioData;
}) {
  return (
    <section className="mx-auto max-w-5xl space-y-12 px-4 py-12 text-white sm:px-6 lg:px-8">
      <motion.h1
        className="text-center text-3xl font-bold text-blue-400 sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {data.title}
      </motion.h1>

      <Carousel images={data.carouselImages} altPrefix={data.title} />

      <motion.div
        className="space-y-4 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
          Introduction
        </h2>
        <p className="text-sm sm:text-base md:text-lg">{data.introduction}</p>
      </motion.div>

      <motion.div
        className="space-y-4 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
          Problem Statement
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          {data.problemStatement}
        </p>
      </motion.div>

      <motion.div
        className="space-y-4 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
          Objectives
        </h2>
        <ul className="list-inside list-disc space-y-2 text-sm sm:text-base md:text-lg">
          {data.objectives.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="space-y-4 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
          Features
        </h2>
        <ul className="list-inside list-disc space-y-2 text-sm sm:text-base md:text-lg">
          {data.features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="space-y-4 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
          Tech Stack
        </h2>
        <ul className="list-inside list-disc space-y-2 text-sm sm:text-base md:text-lg">
          {data.techStack.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="space-y-4 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
          Version Control
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          Current Version: <strong>{data.versionControl.currentVersion}</strong>
        </p>
        <ul className="list-inside list-disc space-y-1">
          {data.versionControl.futureUpdates.map((update, i) => (
            <li key={i}>{update}</li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-left"
      >
        <Link
          href="/projects"
          className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 sm:text-base md:text-lg"
        >
          ← Back to Projects
        </Link>
      </motion.div>
    </section>
  );
}
