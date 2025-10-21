'use client';
import { motion } from 'framer-motion';
import Carousel from '../../Sidebar/SideBar';
import Link from 'next/link';
import {
  ProjectData,
  SectionProps,
  ListSectionProps,
} from '../../../types/codedynamo';

export default function InformationDisplayClient({
  data,
}: {
  data: ProjectData;
}) {
  return (
    <section className="mx-auto max-w-6xl space-y-12 px-4 py-12 text-white sm:px-6 lg:px-8">
      <motion.h1
        className="text-center text-3xl font-bold text-blue-400 sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {data.title}
      </motion.h1>

      <Carousel images={data.carouselImages} altPrefix={data.title} />

      <Section title="Introduction" text={data.introduction} delay={0.2} />
      <Section
        title="Problem Statement"
        text={data.problemStatement}
        delay={0.3}
      />
      <ListSection title="Objectives" items={data.objectives} delay={0.4} />
      <ListSection title="Client Scope" items={data.clientScope} delay={0.5} />
      <ListSection title="Admin Scope" items={data.adminScope} delay={0.6} />

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
          href={data.commingsoon}
          target="_blank"
          className="break-all text-green-400 underline hover:text-purple-400"
        >
          {data.commingsoon}
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
          className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90"
        >
          ← Back to Projects
        </Link>
      </motion.div>
    </section>
  );
}

function Section({ title, text, delay }: SectionProps) {
  return (
    <motion.div
      className="space-y-4 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
        {title}
      </h2>
      <p className="text-sm sm:text-base md:text-lg">{text}</p>
    </motion.div>
  );
}

function ListSection({ title, items, delay }: ListSectionProps) {
  return (
    <motion.div
      className="space-y-4 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <h2 className="text-2xl font-semibold text-blue-400 sm:text-3xl">
        {title}
      </h2>
      <ul className="list-inside list-disc space-y-2 text-sm sm:text-base md:text-lg">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
