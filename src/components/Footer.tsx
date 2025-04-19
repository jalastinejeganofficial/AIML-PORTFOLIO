import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Portfolio</h3>
            <p className="text-sm mb-4 max-w-xs">
              Showcasing my journey, skills, and projects in Artificial Intelligence and Machine Learning.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@example.com" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className={`text-sm ${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}>Home</a>
              </li>
              <li>
                <a href="#about" className={`text-sm ${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}>About</a>
              </li>
              <li>
                <a href="#skills" className={`text-sm ${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}>Skills</a>
              </li>
              <li>
                <a href="#projects" className={`text-sm ${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}>Projects</a>
              </li>
              <li>
                <a href="#education" className={`text-sm ${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}>Education</a>
              </li>
              <li>
                <a href="#contact" className={`text-sm ${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}>Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm mb-2">Email: contact@example.com</p>
            <p className="text-sm mb-2">Location: San Francisco, CA</p>
            <p className="text-sm">Open for opportunities: Yes</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {currentYear} AI Portfolio. All rights reserved.</p>
          <p className="text-sm mt-2 md:mt-0 flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;