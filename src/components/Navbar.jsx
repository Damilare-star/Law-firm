import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white py-4 px-6 shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-yellow-400">LawFirm</Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><Link to="/" className="hover:text-yellow-400 transition font-medium">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400 transition font-medium">About</Link></li>
          <li><Link to="/services" className="hover:text-yellow-400 transition font-medium">Services</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition font-medium">Contact</Link></li>
          <li>
            <Link to="/contact" className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-500 transition">
              Book Consultation
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2">
          <li><Link to="/" className="block py-2 hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="block py-2 hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" className="block py-2 hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" className="block py-2 hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
