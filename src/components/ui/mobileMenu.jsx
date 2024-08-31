import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Iconos de menú y cerrar
import { Link } from 'react-router-dom';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="focus:outline-none">
        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 shadow-md z-50">
          <nav className="flex flex-col space-y-4">
            <Link to="/" onClick={toggleMenu} className="hover:underline">Home</Link>
            <Link to="/documentation" onClick={toggleMenu} className="hover:underline">Documentation</Link>
            <Link to="/dashboard" onClick={toggleMenu} className="hover:underline">Dashboard</Link>
            <Link to="/login" onClick={toggleMenu} className="hover:underline">Login</Link>
          </nav>
        </div>
      )}
    </div>
  );
}
