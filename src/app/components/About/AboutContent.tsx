'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import DownloadCV from '../CV/DownloadCV';
import { aboutHeroData } from '../../data/About/aboutSection';

export default function AboutHero() {
  const data = aboutHeroData;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={data.profileImage}
            alt={data.name}
            width={300}
            height={300}
            className="rounded-2xl object-cover shadow-lg shadow-purple-500/30 sm:h-[320px] sm:w-[320px] md:h-[340px] md:w-[340px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 text-justify text-gray-300"
        >
          <h2 className="text-center text-2xl font-semibold text-blue-400 sm:text-3xl md:text-left">
            {data.name}
          </h2>

          <p className="flex items-center justify-center text-gray-400 md:justify-start">
            <Mail className="mr-2 text-purple-400" size={18} />
            {data.email}
          </p>

          <p className="flex justify-center md:justify-start">
            <Linkedin className="mr-2 text-blue-400" size={18} />
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              linkedin.com/in/muhammad-saqib-younas
            </a>
          </p>

          <p className="flex items-center justify-center gap-2 md:justify-start">
            <MapPin className="text-purple-400" size={18} /> {data.location}
          </p>

          <div className="mt-4 space-y-3 text-justify text-sm leading-relaxed sm:text-base">
            {data.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <DownloadCV />
        </motion.div>
      </div>
    </section>
  );
}
