'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectsGridProps } from '../../types/projects'; // import types

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <>
      <motion.h1
        className="mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        My Projects
      </motion.h1>

      <div className="grid w-full max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
            className="flex flex-col overflow-hidden rounded-2xl bg-gray-800 shadow-lg transition-shadow duration-300 hover:shadow-purple-700/40"
          >
            <div className="relative h-56 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-grow flex-col p-6">
              <h2 className="mb-3 text-2xl font-semibold text-blue-400">
                {project.title}
              </h2>
              <p className="flex-grow text-sm text-gray-300">
                {project.description.length > 130
                  ? project.description.slice(0, 130) + '...'
                  : project.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 py-2 font-medium text-white transition hover:opacity-90"
              >
                Read More →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ProjectsGrid;
