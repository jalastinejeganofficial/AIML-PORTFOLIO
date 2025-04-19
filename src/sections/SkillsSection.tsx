import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

const SkillsSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  const skills: Skill[] = [
    {
      category: 'Machine Learning',
      items: [
        { name: 'Supervised Learning', level: 95 },
        { name: 'Unsupervised Learning', level: 90 },
        { name: 'Reinforcement Learning', level: 85 },
        { name: 'Deep Learning', level: 90 },
      ],
    },
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python', level: 95 },
        { name: 'R', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      category: 'Libraries & Frameworks',
      items: [
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'Scikit-Learn', level: 95 },
        { name: 'Keras', level: 90 },
      ],
    },
    {
      category: 'Tools & Technologies',
      items: [
        { name: 'Docker', level: 85 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'AWS/Azure/GCP', level: 80 },
        { name: 'MLOps', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-indigo-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{skillCategory.category}</h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className="h-2 rounded-full bg-indigo-600" 
                        style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className={`text-xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Natural Language Processing', 'Computer Vision', 'Time Series Analysis',
              'Recommendation Systems', 'Data Visualization', 'Statistical Analysis',
              'Feature Engineering', 'Model Optimization', 'Data Preprocessing',
              'A/B Testing', 'Ensemble Methods', 'Neural Networks',
              'Clustering', 'Classification', 'Regression Analysis',
              'Dimensionality Reduction', 'Transfer Learning', 'Big Data Technologies'
            ].map((tag, index) => (
              <span 
                key={index} 
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  isDarkMode 
                    ? 'bg-gray-800 text-gray-200 border border-gray-700' 
                    : 'bg-gray-100 text-gray-800'
                } hover:bg-indigo-600 hover:text-white transition-colors cursor-default`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;