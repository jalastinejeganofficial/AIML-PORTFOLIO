import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const HeroSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: isDarkMode 
          ? 'linear-gradient(to bottom right, rgba(17, 24, 39, 0.97), rgba(7, 89, 133, 0.95))'
          : 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.9), rgba(224, 231, 255, 0.9))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern bg-repeat"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in-up">
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Hi, I'm </span>
              <span className="text-indigo-600">Alex Chen</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-6 animate-fade-in-up animation-delay-300">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>AI/ML Engineer & Data Scientist</span>
            </p>
            <p className={`text-base md:text-lg mb-8 max-w-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} animate-fade-in-up animation-delay-600`}>
              Transforming complex data into meaningful insights and building intelligent systems that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-900">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                className={`px-6 py-3 rounded-md font-medium flex items-center gap-2 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
                } transition-colors shadow-lg hover:shadow-xl`}
              >
                <Download size={18} /> Resume
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-indigo-600 shadow-2xl animate-float">
              <img 
                src="https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className={`flex flex-col items-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;