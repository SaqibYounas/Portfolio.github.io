'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo, socialLinks } from '../../data/contractlinks';

const ContactInfo: React.FC = () => {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Contact Details */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">
          Contact Info
        </h2>
        <div className="space-y-4 text-gray-300">
          <p className="flex items-center gap-3">
            {(() => {
              const PhoneIcon = socialLinks.find(
                (link) => link.name === 'Phone'
              )?.icon;
              return PhoneIcon ? (
                <PhoneIcon className="text-purple-400" size={22} />
              ) : null;
            })()}
            {contactInfo.phone}
          </p>

          <p className="flex items-center gap-3">
            {(() => {
              const MailIcon = socialLinks.find(
                (link) => link.name === 'Email'
              )?.icon;
              return MailIcon ? (
                <MailIcon className="text-purple-400" size={22} />
              ) : null;
            })()}
            {contactInfo.email}
          </p>

          <p className="flex items-center gap-3">
            {(() => {
              const MapIcon = socialLinks.find(
                (link) => link.name === 'LinkedIn'
              )?.icon;
              return MapIcon ? (
                <MapIcon className="text-purple-400" size={22} />
              ) : null;
            })()}
            {contactInfo.location}
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-blue-400">Follow Me</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="flex gap-6 text-gray-300"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-transform transform hover:scale-110 ${link.color}`}
              >
                <Icon size={26} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
