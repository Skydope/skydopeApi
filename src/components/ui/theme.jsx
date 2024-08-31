import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme') || (root.classList.contains('dark') ? 'dark' : 'light');
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      root.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('dark');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full focus:outline-none"
      aria-label="Toggle Theme"
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out
          ${theme === 'dark' ? 'translate-x-6' : ''}`}
      >
        <div className="flex items-center justify-center w-full h-full">
          {theme === 'light' ? <Moon className="w-4 h-4 text-gray-900" /> : <Sun className="w-4 h-4 text-yellow-500" />}
        </div>
      </div>
    </button>
  );
}
