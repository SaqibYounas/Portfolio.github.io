'use client';
import { motion } from 'framer-motion';
export default function DownloadCV() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Muhammad Saqib Younas Full-Stack-Developer.pdf';
    link.download = 'Muhammad Saqib Younas Full-Stack-Developer.pdf';
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="flex justify-center pt-4 md:justify-start"
    >
      <button
        onClick={handleDownload}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:px-6 sm:py-3 sm:text-base"
      >
        Download CV
      </button>
    </motion.div>
  );
}
