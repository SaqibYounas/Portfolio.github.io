'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail, MapPin } from 'lucide-react';

export default function AboutHero() {
  return (
    <>
      <motion.h1
        className="mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      <div className="grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Profile Photo */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/profile.jpg"
            alt="Muhammad Saqib Younas"
            width={320}
            height={320}
            className="rounded-2xl object-cover shadow-lg shadow-purple-500/30"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 text-gray-300"
        >
          <h2 className="text-3xl font-semibold text-blue-400">
            Muhammad Saqib Younas
          </h2>
          <p className="text-gray-400">
            <Mail className="mr-2 inline-block text-purple-400" size={18} />
            muhammadsaqibyounas11@gmail.com
          </p>
          <p>
            <Linkedin className="mr-2 inline-block text-blue-400" size={18} />
            <a
              href="https://www.linkedin.com/in/muhammad-saqib-younas-0123aa329"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              linkedin.com/in/muhammad-saqib-younas
            </a>
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="text-purple-400" size={18} /> Lahore, Pakistan
          </p>

          <p className="mt-4 leading-relaxed text-gray-300">
            I’m Muhammad Saqib, a BSIT student in my 5th semester who enjoys
            building websites that help people. My first web project made me
            realize how exciting it is to turn an idea into something real.
          </p>

          <p>
            I’ve completed internships at{' '}
            <span className="font-medium text-blue-400">Appaura</span> and{' '}
            <span className="font-medium text-purple-400">TechTommy</span>,
            working with React.js, Node.js, and PostgreSQL. I’m eager to
            continue learning as a Full-Stack Developer Intern.
          </p>
        </motion.div>
      </div>
    </>
  );
}
