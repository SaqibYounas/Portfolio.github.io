import React from 'react';
import Header from '../components/Header';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-6 py-16 text-white">
      <Header />

      <h1 className="mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
        Get In Touch
      </h1>

      <div className="grid w-full max-w-6xl gap-12 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}
