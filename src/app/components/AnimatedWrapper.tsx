'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function AnimatedWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Gradient background colors per page
  const pageGradients: Record<string, string> = {
    '/': 'from-blue-200 via-purple-100 to-purple-300',
    '/about': 'from-pink-200 via-blue-100 to-blue-300',
    '/projects': 'from-green-200 via-teal-100 to-teal-300',
    '/contact': 'from-yellow-200 via-orange-100 to-orange-300',
  };

  const currentGradient =
    pageGradients[pathname] || 'from-blue-200 via-purple-100 to-purple-300';

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Persistent background (base layer) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentGradient} transition-all duration-700 -z-20`} />

      {/* Animated overlay (smooth blend between pages) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={`absolute inset-0 bg-gradient-to-br ${currentGradient} blur-2xl -z-10`}
        />
      </AnimatePresence>

      {/* Page content fade + slide animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname + '-content'}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="relative z-10 flex flex-col justify-center min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
