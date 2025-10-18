'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { Linkedin, Mail, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-16">
      <Header />

      {/* Page Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        About Me
      </motion.h1>

      {/* Intro Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl items-center">
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

        {/* Introduction */}
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
            <Mail className="inline-block mr-2 text-purple-400" size={18} />
            muhammadsaqibyounas11@gmail.com
          </p>
          <p>
            <Linkedin className="inline-block mr-2 text-blue-400" size={18} />
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

          <p className="text-gray-300 leading-relaxed mt-4">
            I’m Muhammad Saqib, a BSIT student in my 5th semester who genuinely
            enjoys building websites that help people. My first web project made
            me realize how exciting it is to turn an idea into something real.
            Since then, I’ve worked on both frontend and backend projects,
            improving my skills one step at a time.
          </p>

          <p>
            I’ve completed two internships at{' '}
            <span className="text-blue-400 font-medium">Appaura</span>{' '}
            (Frontend) and{' '}
            <span className="text-purple-400 font-medium">TechTommy</span>{' '}
            (Backend), working with React.js, Node.js, and PostgreSQL. I’m eager
            to continue learning as a Full-Stack Developer Intern and build
            things that make a difference.
          </p>
        </motion.div>
      </div>

      {/* Experience Section */}
      <section className="max-w-6xl w-full mt-20 space-y-10">
        <motion.h2
          className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Appaura */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold text-blue-400">
              Frontend Developer Intern
            </h3>
            <p className="text-gray-400 text-sm mb-2">Appaura | Remote</p>
            <ul className="list-disc ml-5 space-y-2 text-gray-300 text-sm">
              <li>Built responsive web interfaces using React.js.</li>
              <li>Translated design mockups into functional components.</li>
              <li>Debugged and optimized frontend code for performance.</li>
              <li>Integrated APIs and joined code reviews.</li>
            </ul>
          </div>

          {/* TechTommy */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold text-blue-400">
              Backend Developer Intern
            </h3>
            <p className="text-gray-400 text-sm mb-2">TechTommy | Remote</p>
            <ul className="list-disc ml-5 space-y-2 text-gray-300 text-sm">
              <li>
                Created REST APIs using Node.js, Express.js, and PostgreSQL.
              </li>
              <li>Designed and implemented optimized database schemas.</li>
              <li>Integrated backend services with frontend features.</li>
              <li>Worked on deployment and Git version control.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section className="max-w-6xl w-full mt-20 space-y-10">
        <motion.h2
          className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education & Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div className="bg-gray-800 p-6 rounded-2xl border-gray-700 shadow-lg border hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold text-blue-400">
              Bachelor &apos;s Degree in Information Technology (BSIT)
            </h3>
            <p className="text-gray-400 mt-1">
              The Superior University, Lahore
            </p>
            <p className="text-gray-400 text-sm">In Progress — CGPA: 3.3</p>
          </div>

          {/* Skills */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700  hover:border-purple-500 transition text-gray-300">
            <p>
              <span className="text-purple-400 font-semibold">Frontend:</span>{' '}
              React.js, Next.js, Tailwind CSS, Bootstrap 5
            </p>
            <p>
              <span className="text-purple-400 font-semibold">Backend:</span>{' '}
              Node.js, Express.js, REST APIs, GraphQL
            </p>
            <p>
              <span className="text-purple-400 font-semibold">Databases:</span>{' '}
              PostgreSQL, MongoDB, Redis
            </p>
            <p>
              <span className="text-purple-400 font-semibold">Tools:</span>{' '}
              Docker, Git, AWS, Vercel, Render
            </p>
            <p>
              <span className="text-purple-400 font-semibold">Testing:</span>{' '}
              Jest, Vitest, Postman, RTL
            </p>
          </div>
        </div>
      </section>

      {/* Certifications & Projects */}
      <section className="max-w-6xl w-full mt-20">
        <motion.h2
          className="text-3xl font-bold text-center bg-gradient-to-r  hover:border-purple-500 transition from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Certifications & Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 ">
          {/* Certifications */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 text-gray-300  hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Certifications
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>SQL (Basic) — HackerRank</li>
              <li>SQL (Intermediate) — HackerRank</li>
              <li>CSS (Basic) — HackerRank</li>
            </ul>
          </div>

          {/* Projects */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 text-gray-300  hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Highlighted Projects
            </h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <span className="font-semibold text-purple-400">
                  Weather Forecast App:
                </span>{' '}
                Built with React.js, Tailwind CSS, and OpenWeather API.
              </li>
              <li>
                <span className="font-semibold text-purple-400">
                  Information Display Page:
                </span>{' '}
                Developed using React.js & Bootstrap 5.
              </li>
              <li>
                <span className="font-semibold text-purple-400">
                  Role-Based Service Platform:
                </span>{' '}
                Full-stack app using React, Express, MongoDB, Redis, and OAuth.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
