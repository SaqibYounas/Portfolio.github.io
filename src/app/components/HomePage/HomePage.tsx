'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { socialLinks } from '../../data/other/contractlinks';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-900 px-4 text-center sm:px-6 md:px-10">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-3xl leading-tight font-extrabold text-transparent drop-shadow-lg sm:text-4xl md:text-6xl"
      >
        Hi! I&apos;m <span className="text-white">Muhammad Saqib Younas</span>
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg md:max-w-3xl md:text-xl"
      >
        I&apos;m a{' '}
        <span className="font-semibold text-blue-400">
          Full Stack Developer
        </span>{' '}
        based in Lahore, Pakistan — specializing in{' '}
        <span className="font-semibold text-purple-400">
          React.js, Next.js, Node.js
        </span>
        .
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-6"
      >
        <Link
          href="/about"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:px-6 sm:py-3 sm:text-base"
        >
          More About Me →
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-8 flex gap-6 text-gray-300"
      >
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transform transition-transform hover:scale-110 ${link.color}`}
              aria-label={link.name}
            >
              <Icon size={26} />
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
