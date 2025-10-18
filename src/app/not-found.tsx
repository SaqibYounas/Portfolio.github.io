"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      {/* Animated 404 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl text-gray-300 text-center"
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
          className="px-6 py-3 rounded-xl text-lg font-medium text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-[0_0_15px_#a855f7] transition-all duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Decorative Glow Circle */}
      <div className="absolute -z-10 w-[300px] h-[300px] rounded-full blur-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 animate-pulse" />
    </div>
  );
}
