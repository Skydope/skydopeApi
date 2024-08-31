import React from 'react';
import { Github, Linkedin } from 'lucide-react'; // Puedes usar otros iconos según tus preferencias

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-gray-600">&copy; 2024 Created by <a href="https://skydope.info" target="_blank" rel="noopener noreferrer" className='font-bold hover:text-gray-900'>Skydope</a>. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/Skydope" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/augusto-natiello/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
