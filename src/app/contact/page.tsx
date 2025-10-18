'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Page Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Get In Touch
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Left Section - Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Contact Info
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center gap-3">
                <Phone className="text-purple-400" size={22} /> +92 342 0339016
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-purple-400" size={22} />{' '}
                muhammadsaqibyounas11@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-purple-400" size={22} /> Lahore,
                Pakistan
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-3 text-blue-400">
              Follow Me
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
              className="flex gap-6 text-gray-300"
            >
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/muhammad-saqib-younas-0123aa329"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <Linkedin size={26} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/SaqibYounas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-transform transform hover:scale-110"
              >
                <Github size={26} />
              </a>

              {/* Email */}
              <a
                href="mailto:muhammadsaqibyounas11@gmail.com"
                className="hover:text-red-400 transition-transform transform hover:scale-110"
              >
                <Mail size={26} />
              </a>

              {/* Phone */}
              <a
                href="tel:+923420339016"
                className="hover:text-green-400 transition-transform transform hover:scale-110"
              >
                <Phone size={26} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.form
          className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Send Me an Email
          </h2>
          <p className="text-gray-400">
            Feel free to get in touch with me. I’m always open to discussing new
            projects or creative ideas.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="grid md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </motion.div>

          <motion.input
            type="email"
            placeholder="Your Email"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <motion.textarea
            placeholder="Your Message"
            rows={5}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            required
          ></motion.textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
            className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Send Message →
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactPage;
