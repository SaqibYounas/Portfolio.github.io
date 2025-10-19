'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => (
  <motion.form
    className="space-y-6 rounded-2xl bg-gray-800 p-8 shadow-lg"
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    <h2 className="mb-4 text-2xl font-semibold text-blue-400">
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
      className="grid gap-4 md:grid-cols-2"
    >
      <input
        type="text"
        placeholder="Your Name"
        className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        required
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        required
      />
    </motion.div>

    <motion.input
      type="email"
      placeholder="Your Email"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
      required
    />

    <motion.textarea
      placeholder="Your Message"
      rows={5}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
      className="w-full resize-none rounded-lg border border-gray-600 bg-gray-700 p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
      required
    ></motion.textarea>

    <motion.button
      type="submit"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
      className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 font-semibold text-white shadow-lg transition hover:opacity-90"
    >
      Send Message →
    </motion.button>
  </motion.form>
);

export default ContactForm;
