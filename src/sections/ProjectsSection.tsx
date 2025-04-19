import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

const ProjectsSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Sentiment Analysis Pipeline',
      description: 'A real-time sentiment analysis system for social media monitoring using BERT transformers.',
      image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['NLP', 'Deep Learning', 'PyTorch', 'API'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
    {
      id: 2,
      title: 'Medical Image Classification',
      description: 'Developed a CNN model for medical image classification to detect pneumonia from chest X-rays.',
      image: 'https://images.pexels.com/photos/6753155/pexels-photo-6753155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Computer Vision', 'TensorFlow', 'Healthcare'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
    {
      id: 3,
      title: 'Recommendation System',
      description: 'Built a hybrid recommendation system for an e-commerce platform using collaborative filtering and content-based approaches.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Recommendation', 'Python', 'Pandas'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
    {
      id: 4,
      title: 'Time Series Forecasting',
      description: 'Implemented an LSTM model for predicting stock prices with high accuracy using historical data.',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Time Series', 'Deep Learning', 'Finance'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
    {
      id: 5,
      title: 'Fraud Detection System',
      description: 'Developed an anomaly detection system for identifying fraudulent transactions in banking data.',
      image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Anomaly Detection', 'ML', 'Banking'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
    {
      id: 6,
      title: 'Chatbot Assistant',
      description: 'Created an intelligent chatbot using GPT and RASA frameworks for customer service automation.',
      image: 'https://images.pexels.com/photos/8438951/pexels-photo-8438951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['NLP', 'Chatbot', 'RASA'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
  ];

  const categories = ['all', 'NLP', 'Computer Vision', 'Deep Learning', 'ML', 'Time Series', 'Recommendation'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-indigo-600 text-white'
                  : isDarkMode
                    ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between pt-2">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm font-medium ${
                      isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    <Github size={16} /> Code
                  </a>
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm font-medium ${
                      isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium ${
              isDarkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
            } transition-colors shadow-md`}
          >
            <Github size={18} />
            See More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;