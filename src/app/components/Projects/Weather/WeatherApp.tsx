'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { WeatherAppData } from '../../../types/Projects/weather';

interface Props {
  data: WeatherAppData;
}

export const WeatherAppPageClient: React.FC<Props> = ({ data }) => {
  return (
    <section className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <motion.h1
        className="text-center text-3xl leading-snug font-bold text-blue-400 sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {data.title}
      </motion.h1>

      <motion.div
        className="mx-auto w-full overflow-hidden rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={data.image}
          alt={`${data.title} Screenshot`}
          width={1200}
          height={600}
          className="h-auto w-full rounded-2xl object-cover"
        />
      </motion.div>

      <motion.div
        className="space-y-4 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
          Overview
        </h2>
        <p className="text-sm sm:text-base md:text-lg">{data.overview}</p>
      </motion.div>

      <motion.div
        className="space-y-4 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
          Features
        </h2>
        <ul className="list-outside list-disc space-y-2 pl-6 text-sm sm:text-base md:text-lg">
          {data.features.map((feature, i) => (
            <li key={i} className="break-words">
              {feature}
            </li>
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
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
          API Examples
        </h2>
        <ul className="list-inside list-disc space-y-2 rounded-lg bg-gray-900/50 p-4 font-mono text-xs break-words sm:text-sm md:text-base">
          {data.fetchExamples.map((example, i) => (
            <li key={i}>
              <code className="break-words">{example}</code>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
          Live Demo
        </h2>
        <Link
          href={data.liveDemo}
          target="_blank"
          className="text-sm break-all text-blue-400 underline hover:text-purple-400 sm:text-base md:text-lg"
        >
          {data.liveDemo}
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
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
};
