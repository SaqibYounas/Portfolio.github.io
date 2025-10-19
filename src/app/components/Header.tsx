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
    { name: 'About', href: '/about', icon: <AiFillInfoCircle size={20} /> },
    { name: 'Projects', href: '/projects', icon: <AiFillProject size={20} /> },
    { name: 'Skills', href: '/skills', icon: <AiFillStar size={20} /> },
    { name: 'Contact', href: '/contact', icon: <AiFillMail size={20} /> },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gray-900 text-white shadow-lg transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-2xl font-bold tracking-wide text-transparent md:text-3xl">
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
                        ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent'
                        : 'text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent'
                    }`}
                  >
                    <span className="text-white">{item.icon}</span>
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
          className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-white transition-all duration-300 hover:opacity-80 focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-16 right-0 w-48 rounded-l-lg border-l border-gray-700 bg-gray-900 shadow-lg transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-2 py-3 text-sm font-medium">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-5 py-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-gray-800 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent'
                      : 'text-white hover:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg text-white">{item.icon}</span>
                  <span className="tracking-wide uppercase">{item.name}</span>
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
