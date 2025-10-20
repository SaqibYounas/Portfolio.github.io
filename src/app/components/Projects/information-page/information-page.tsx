'use client';

import { motion } from 'framer-motion';
import Carousel from '../../Sidebar/SideBar'; // ✅ Carousel import
import Link from 'next/link';
import { InfoDisplayProps } from '../../../types/information';

export default function InformationDisplayClient({ data }: InfoDisplayProps) {
  const carouselImages = [
    '/Information-1.PNG',
    '/Information-2.PNG',
    '/Information-3 .PNG',
    '/Information-4.PNG',
    '/Information-5.PNG',
  ];

  return (
    <section className="mx-auto max-w-5xl space-y-12 px-4 py-12 text-white sm:px-6 lg:px-8">
      <motion.h1
        className="text-center text-3xl leading-snug font-bold text-blue-400 sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {data.title}
      </motion.h1>

      <Carousel images={carouselImages} altPrefix={data.title} />

      <motion.div
        className="space-y-4 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
          Overview
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          This project demonstrates a modern{' '}
          <strong>Information Display Page</strong> developed using{' '}
          <strong>React.js</strong> and <strong>Bootstrap 5</strong>. It focuses
          on a clean and responsive UI with reusable components.
        </p>
      </motion.div>

      <motion.div
        className="space-y-4 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
          Key Highlights
        </h2>
        <ul className="list-inside list-disc space-y-2 text-sm sm:text-base md:text-lg">
          <li>Clean layout design for easy readability.</li>
          <li>Responsive structure using Bootstrap Grid.</li>
          <li>Reusable component-based architecture.</li>
          <li>Optimized build using Vite.</li>
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
          <li>React.js</li>
          <li>Bootstrap 5</li>
          <li>Vite</li>
          <li>CSS Animations</li>
        </ul>
      </motion.div>

      <motion.div
        className="text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="mb-2 text-2xl font-semibold text-blue-400 sm:text-3xl">
          Live Demo
        </h2>
        <Link
          href={data.liveDemo}
          target="_blank"
          className="text-sm break-all text-green-400 underline hover:text-purple-400 sm:text-base md:text-lg"
        >
          {data.liveDemo}
        </Link>
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
