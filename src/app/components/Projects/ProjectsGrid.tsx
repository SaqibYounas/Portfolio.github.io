'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectsGridProps } from '../../types/projectgrid';

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.h1
        className="mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      <div className="grid w-full gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden rounded-2xl bg-gray-800 shadow-lg transition-shadow duration-300 hover:shadow-purple-700/40"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
          >
            <div className="relative h-64 w-full sm:h-72 md:h-64 lg:h-72 xl:h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col p-6">
              <h2 className="mb-3 text-2xl font-semibold text-blue-400">
                {project.title}
              </h2>
              <p className="mb-4 text-sm break-words text-gray-300">
                {project.description.length > 130
                  ? project.description.slice(0, 130) + '...'
                  : project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.detailsPage && (
                  <Link
                    href={project.detailsPage}
                    className="min-w-[120px] flex-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-center font-medium text-white transition hover:opacity-90"
                  >
                    Read More →
                  </Link>
                )}

                {project.liveDemo && (
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    className="min-w-[120px] flex-1 rounded-full bg-green-500 px-4 py-2 text-center font-medium text-white transition hover:opacity-90"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
