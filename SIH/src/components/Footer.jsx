import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-700">Monastery360</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Digitizing and preserving Sikkim’s monastic heritage. Explore virtual
            tours, archives, events, and community contributions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>
              <a href="/" className="hover:text-emerald-600 transition">Home</a>
            </li>
            <li>
              <a href="/explore" className="hover:text-emerald-600 transition">Explore</a>
            </li>
            <li>
              <a href="/virtual-tour" className="hover:text-emerald-600 transition">Virtual Tour</a>
            </li>
            <li>
              <a href="/archive" className="hover:text-emerald-600 transition">Archives</a>
            </li>
            <li>
              <a href="/events" className="hover:text-emerald-600 transition">Events</a>
            </li>
            <li>
              <a href="/community" className="hover:text-emerald-600 transition">Community</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Connect</h4>
          <p className="mt-2 text-gray-600 text-sm">
            Email: <a href="mailto:info@monastery360.com" className="hover:text-emerald-600">info@monastery360.com</a>
          </p>
          <p className="mt-1 text-gray-600 text-sm">Phone: +91 70000 00000</p>

          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition">🌐</a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition">🐦</a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition">📘</a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Monastery360 • Built for preservation & sustainable tourism • Made with ❤️
      </div>
    </footer>
  );
};

export default Footer;
