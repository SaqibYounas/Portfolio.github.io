'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail, MapPin } from 'lucide-react';

export default function AboutHero() {
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
            src="/profile.jpg"
            alt="Muhammad Saqib Younas"
            width={300}
            height={300}
            className="rounded-2xl object-cover shadow-lg shadow-purple-500/30 sm:h-[320px] sm:w-[320px] md:h-[340px] md:w-[340px]"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 text-justify text-gray-300"
        >
          <h2 className="text-center text-2xl font-semibold text-blue-400 sm:text-3xl md:text-left">
            Muhammad Saqib Younas
          </h2>

          {/* Email */}
          <p className="flex items-center justify-center text-gray-400 md:justify-start">
            <Mail className="mr-2 text-purple-400" size={18} />
            muhammadsaqibyounas11@gmail.com
          </p>

          {/* LinkedIn */}
          <p className="flex justify-center md:justify-start">
            <Linkedin className="mr-2 text-blue-400" size={18} />
            <a
              href="https://www.linkedin.com/in/muhammad-saqib-younas-0123aa329"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              linkedin.com/in/muhammad-saqib-younas
            </a>
          </p>

          {/* Location */}
          <p className="flex items-center justify-center gap-2 md:justify-start">
            <MapPin className="text-purple-400" size={18} /> Lahore, Pakistan
          </p>

          {/* Bio */}
          <div className="mt-4 space-y-3 text-justify text-sm leading-relaxed sm:text-base">
            <p>
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
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center pt-4 md:justify-start"
          >
            <a
              href="/Muhammad_Saqib_Younas_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:px-6 sm:py-3 sm:text-base"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
