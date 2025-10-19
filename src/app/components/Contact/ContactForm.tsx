'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => (
  <motion.form
    className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
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
      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
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
      transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
      required
    />

    <motion.textarea
      placeholder="Your Message"
      rows={5}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
      required
    ></motion.textarea>

    <motion.button
      type="submit"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
      className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
    >
      Send Message →
    </motion.button>
  </motion.form>
);

export default ContactForm;
