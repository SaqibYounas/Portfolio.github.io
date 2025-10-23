'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  // 🔹 states
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.placeholder.toLowerCase().replace(' ', '')]: e.target.value,
    });
  };

  // 🔹 submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMsg({
          type: 'success',
          text: '✅ Message sent successfully!',
        });
        setFormData({ name: '', subject: '', email: '', message: '' });
      } else {
        setResponseMsg({
          type: 'error',
          text: `❌ ${data.error || 'Something went wrong.'}`,
        });
      }
    } catch (error) {
      setResponseMsg({
        type: 'error',
        text: '❌ Failed to send message. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full rounded-2xl bg-gray-800 p-6 shadow-lg sm:p-8"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <h2 className="mb-4 text-2xl font-semibold text-blue-400">
        Send Me an Email
      </h2>
      <p className="mb-6 text-gray-400">
        Feel free to get in touch with me. I’m always open to discussing new
        projects or creative ideas.
      </p>

      {/* Inputs */}
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          required
        />
      </div>

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="mt-4 w-full rounded-lg border border-gray-600 bg-gray-700 p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        required
      />

      <textarea
        placeholder="Message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        className="mt-4 w-full resize-none rounded-lg border border-gray-600 bg-gray-700 p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        required
      ></textarea>

      {/* Button */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={!loading ? { scale: 1.05 } : {}}
        whileTap={!loading ? { scale: 0.95 } : {}}
        className={`mt-6 w-full cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 font-semibold text-white shadow-lg transition ${
          loading ? 'cursor-not-allowed opacity-50' : 'hover:opacity-90'
        }`}
      >
        {loading ? 'Sending...' : 'Send Message →'}
      </motion.button>

      {/* Response message */}
      {responseMsg && (
        <p
          className={`mt-4 text-center text-sm ${
            responseMsg.type === 'success' ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {responseMsg.text}
        </p>
      )}
    </motion.form>
  );
};

export default ContactForm;
