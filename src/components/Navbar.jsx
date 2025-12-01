"use client";

import { useState } from "react";
import Link from "next/link";
import { HomeIcon, BookOpenIcon, InformationCircleIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/", icon: <HomeIcon className="w-5 h-5 inline mr-2" /> },
    { name: "Courses", href: "/courses", icon: <BookOpenIcon className="w-5 h-5 inline mr-2" /> },
    { name: "About", href: "/about", icon: <InformationCircleIcon className="w-5 h-5 inline mr-2" /> },
    { name: "Contact", href: "/contact", icon: <PhoneIcon className="w-5 h-5 inline mr-2" /> },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              CourseMaster
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            {/* Join Button */}
                        <Link href="/auth/register" className="block px-3 py-2 mt-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Join
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-8 h-8 flex flex-col justify-between items-center focus:outline-none"
            >
              <span
                className={`h-1 w-full bg-gray-700 rounded transform transition duration-300 ease-in-out ${
                  menuOpen ? "rotate-45 translate-y-3.5" : ""
                }`}
              />
              <span
                className={`h-1 w-full bg-gray-700 rounded transition-all duration-300 ease-in-out ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-1 w-full bg-gray-700 rounded transform transition duration-300 ease-in-out ${
                  menuOpen ? "-rotate-45 -translate-y-3.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-max-height duration-500 ease-in-out ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}

          {/* Join Button */}
                     <Link href="/auth/register" className="block px-3 py-2 mt-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Join
            </Link>

        </div>
      </div>
    </nav>
  );
}
