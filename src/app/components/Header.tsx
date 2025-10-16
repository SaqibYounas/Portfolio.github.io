"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject,
  AiFillStar,
  AiFillMail,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items with filled icons
  const navItems = [
    { name: "Home", href: "#home", icon: <AiFillHome size={20} /> },
    { name: "About", href: "#about", icon: <AiFillInfoCircle size={20} /> },
    { name: "Projects", href: "#projects", icon: <AiFillProject size={20} /> },
    { name: "Skills", href: "#skills", icon: <AiFillStar size={20} /> },
    { name: "Contact", href: "#contact", icon: <AiFillMail size={20} /> },
  ];

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-orange-400">
          <Link href="/">Portfolio</Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 hover:text-orange-400 transition-colors duration-300"
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-orange-400 hover:text-white transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-16 right-0 w-48 bg-gray-900 shadow-lg border-l border-gray-700 rounded-l-lg transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
      >
        <ul className="flex flex-col py-3 space-y-2 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-5 py-2 hover:bg-gray-800 hover:text-orange-400 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="uppercase tracking-wide">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </header>
  );
};

export default Header;
