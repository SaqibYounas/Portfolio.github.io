'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4 text-white">
      {/* Animated 404 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-center text-lg text-gray-300 md:text-xl"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      {/* Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:shadow-[0_0_15px_#a855f7]"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Decorative Glow Circle */}
      <div className="absolute -z-10 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl" />
    </div>
  );
}
