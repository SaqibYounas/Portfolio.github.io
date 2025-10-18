'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';
const ProjectsPage: React.FC = () => {
  // Example projects (you can replace these later)
  const projects = [
    {
      title: 'Weather App',
      description:
        'A modern weather forecasting app built with HTML, CSS, and JavaScript. It fetches live weather data using APIs and displays temperature, humidity, and wind speed with a responsive UI.',
      image: '/weather-app.jpg',
    },
    {
      title: 'Calculator App',
      description:
        'A responsive and interactive calculator built using HTML, CSS, and JavaScript with support for basic arithmetic operations and keyboard input.',
      image: '/calculator.jpg',
    },
    {
      title: 'Portfolio Website',
      description:
        'A sleek personal portfolio built with Next.js, Tailwind CSS, and Framer Motion — showcasing projects, skills, and contact information.',
      image: '/portfolio.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-16">
      <Header />

      {/* Page Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        My Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-700/40 transition-shadow duration-300 flex flex-col"
          >
            {/* Project Image */}
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold text-blue-400 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm flex-grow">
                {project.description.length > 130
                  ? project.description.slice(0, 130) + '...'
                  : project.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition"
              >
                Read More →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
