import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-emerald-700">
          Monastery360
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-emerald-600">
            Home
          </Link>
          <Link to="/explore" className="hover:text-emerald-600">
            Explore
          </Link>
          <Link to="/virtual-tour" className="hover:text-emerald-600">
            Virtual Tour
          </Link>
          <Link to="/archive" className="hover:text-emerald-600">
            Archives
          </Link>
          <Link to="/events" className="hover:text-emerald-600">
            Events
          </Link>
          <Link to="/community" className="hover:text-emerald-600">
            Community
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-emerald-600"
          >
            Home
          </Link>
          <Link
            to="/explore"
            onClick={() => setIsOpen(false)}
            className="block hover:text-emerald-600"
          >
            Explore
          </Link>
          <Link
            to="/virtual-tour"
            onClick={() => setIsOpen(false)}
            className="block hover:text-emerald-600"
          >
            Virtual Tour
          </Link>
          <Link
            to="/archive"
            onClick={() => setIsOpen(false)}
            className="block hover:text-emerald-600"
          >
            Archives
          </Link>
          <Link
            to="/events"
            onClick={() => setIsOpen(false)}
            className="block hover:text-emerald-600"
          >
            Events
          </Link>
          <Link
            to="/community"
            onClick={() => setIsOpen(false)}
            className="block hover:text-emerald-600"
          >
            Community
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
