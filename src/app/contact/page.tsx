import React from 'react';
import Header from '../components/Header';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-16">
      <Header />

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
        Get In Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}
