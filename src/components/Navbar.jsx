import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="flex justify-between items-center py-4 px-4 md:px-6 w-full">
        {/* Logo */}
        <a href="/" className="text-xl font-bold px-4 text-gray-800">
          Woodies Online
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-800">
          <li>
            <a href="/" className="hover:text-green-600">
              Home
            </a>
          </li>
          <li>
            <a href="/categories" className="hover:text-green-600">
              Categories
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-green-600">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-green-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none focus:text-green-600"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md w-full">
          <ul className="space-y-4 py-4 px-4 text-gray-800">
            <li>
              <a
                href="/"
                className="block hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/categories"
                className="block hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
