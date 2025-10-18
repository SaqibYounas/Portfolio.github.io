'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LinkedinIcon, GithubIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render static placeholder during SSR to match HTML
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 bg-gray-900 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 drop-shadow-lg leading-tight"
      >
        Hi! I&apos;m <span className="text-white">Muhammad Saqib Younas</span>
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 max-w-2xl md:max-w-3xl leading-relaxed"
      >
        I&apos;m a <span className="text-blue-400 font-semibold">Full Stack Developer</span>{' '}
        based in Lahore, Pakistan — specializing in{' '}
        <span className="text-purple-400 font-semibold">React.js, Next.js, Node.js</span>.
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-6"
      >
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-base font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          More About Me →
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex gap-6 mt-8"
      >
        <Link
          href="https://www.linkedin.com/in/muhammad-saqib-younas"
          target="_blank"
          className="text-white hover:text-blue-400 transition-colors"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={26} />
        </Link>
        <Link
          href="https://github.com/SaqibYounas"
          target="_blank"
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="GitHub"
        >
          <GithubIcon size={26} />
        </Link>
        <Link
          href="mailto:muhammadsaqibyounas@gmail.com"
          className="text-white hover:text-red-400 transition-colors"
          aria-label="Email"
        >
          <MailIcon size={26} />
        </Link>
      </motion.div>
    </div>
  );
}
