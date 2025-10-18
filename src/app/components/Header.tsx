'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject,
  AiFillStar,
  AiFillMail,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: <AiFillHome size={20} /> },
    { name: 'About', href: '#about', icon: <AiFillInfoCircle size={20} /> },
    { name: 'Projects', href: '#projects', icon: <AiFillProject size={20} /> },
    { name: 'Skills', href: '/skills', icon: <AiFillStar size={20} /> },
    { name: 'Contact', href: '/contact', icon: <AiFillMail size={20} /> },
  ];

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
          <Link href="/">Portfolio</Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-lg font-medium">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 transition-all duration-300 ${
                      isActive
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500'
                        : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-500'
                    }`}
                  >
                    <span className=" text-white">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none  bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 hover:opacity-80 transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-16 right-0 w-48 bg-gray-900 shadow-lg border-l border-gray-700 rounded-l-lg transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <ul className="flex flex-col py-3 space-y-2 text-sm font-medium">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-5 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-gray-800'
                      : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-500 hover:bg-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg text-white">{item.icon}</span>
                  <span className="uppercase tracking-wide">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
