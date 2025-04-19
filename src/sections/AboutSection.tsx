import React from 'react';
import { Brain, BookOpen, Code, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AboutSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  const stats = [
    { icon: <Brain size={24} />, value: '4+', label: 'Years Experience' },
    { icon: <BookOpen size={24} />, value: '12+', label: 'Publications' },
    { icon: <Code size={24} />, value: '20+', label: 'Projects' },
    { icon: <Users size={24} />, value: '15+', label: 'Collaborations' },
  ];

  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            About <span className="text-indigo-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              AI/ML Engineer with a Passion for Innovation
            </h3>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a dedicated AI and Machine Learning engineer with a strong foundation in computer science and mathematics. My journey in the world of artificial intelligence began during my undergraduate studies, where I discovered the incredible potential of machine learning to solve complex problems.
            </p>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              With expertise in developing and deploying machine learning models, natural language processing, and computer vision systems, I strive to create AI solutions that are not only technically sound but also ethical and accessible. I'm particularly interested in the intersection of AI with healthcare, sustainability, and education.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                  } shadow-md transition-transform hover:scale-105`}
                >
                  <div className="text-indigo-600 mb-2">{stat.icon}</div>
                  <h4 className="text-2xl font-bold">{stat.value}</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className={`absolute inset-0 transform translate-x-3 translate-y-3 rounded-lg ${isDarkMode ? 'bg-indigo-700' : 'bg-indigo-200'}`}></div>
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Working on AI models" 
                className="relative z-10 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;