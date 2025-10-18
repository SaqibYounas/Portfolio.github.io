'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Image from 'next/image';
import { Linkedin, Github, Mail } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover brightness-75"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 drop-shadow-lg leading-tight"
          >
            Hi! I'm <span className="text-white">Muhammad Saqib Younas</span>
          </motion.h1>

          {/* Animated Description */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 max-w-2xl md:max-w-3xl leading-relaxed"
          >
            I'm a{' '}
            <span className="text-blue-400 font-semibold">
              Full Stack Developer
            </span>{' '}
            based in Lahore, Pakistan — specializing in building modern and
            responsive web applications using{' '}
            <span className="text-purple-400 font-semibold">
              React.js, Next.js, Node.js,
            </span>{' '}
            and other modern technologies.
          </motion.h3>

          {/* Animated About Button */}
          <motion.a
            href="#about"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-base font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            More About Me →
          </motion.a>

          {/* Animated Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-6 mt-8"
          >
            <a
              href="https://www.linkedin.com/in/muhammad-saqib-younas"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="https://github.com/SaqibYounas"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Github size={26} />
            </a>
            <a
              href="mailto:muhammadsaqibyounas@gmail.com"
              title="Send me an Email"
              className="text-white hover:text-red-400 transition-colors"
            >
              <Mail size={26} />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
