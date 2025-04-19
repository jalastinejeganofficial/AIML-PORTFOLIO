import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
}

const EducationSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: 'Ph.D. in Computer Science',
      organization: 'Stanford University',
      period: '2019 - 2022',
      description: 'Specialized in Machine Learning with a focus on reinforcement learning applications. Dissertation on "Adaptive Learning Strategies for Complex Decision Making Systems".',
      type: 'education',
    },
    {
      id: 2,
      title: 'AI Research Scientist',
      organization: 'TechInnovate AI',
      period: '2022 - Present',
      description: 'Leading research team on developing novel deep learning approaches for autonomous systems. Published 5 papers in top-tier conferences.',
      type: 'experience',
    },
    {
      id: 3,
      title: 'M.S. in Machine Learning',
      organization: 'Massachusetts Institute of Technology',
      period: '2017 - 2019',
      description: 'Focused on deep learning and computer vision. Completed thesis on "Transfer Learning in Limited Data Environments".',
      type: 'education',
    },
    {
      id: 4,
      title: 'ML Engineer',
      organization: 'DataSense Analytics',
      period: '2019 - 2022',
      description: 'Developed and deployed machine learning models for predictive analytics in the healthcare sector. Improved diagnostic accuracy by 23%.',
      type: 'experience',
    },
    {
      id: 5,
      title: 'B.S. in Computer Science',
      organization: 'University of California, Berkeley',
      period: '2013 - 2017',
      description: 'Graduated with honors. Specialization in Artificial Intelligence and Data Science. Received outstanding undergraduate researcher award.',
      type: 'education',
    },
    {
      id: 6,
      title: 'Data Science Intern',
      organization: 'Global Tech Solutions',
      period: 'Summer 2016',
      description: 'Implemented recommendation algorithms for an e-commerce platform. Increased user engagement by 15% and sales conversion by 7%.',
      type: 'experience',
    },
  ];

  const educationItems = timelineItems.filter(item => item.type === 'education');
  const experienceItems = timelineItems.filter(item => item.type === 'experience');

  return (
    <section id="education" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Education & <span className="text-indigo-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap size={24} className="text-indigo-600 mr-2" />
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Education</h3>
            </div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-indigo-600"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {educationItems.map((item) => (
                  <div key={item.id} className="relative pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1.5 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className={`p-5 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <div className="flex flex-wrap justify-between mb-2">
                        <h4 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                        <span className="text-indigo-600 text-sm font-medium">{item.period}</span>
                      </div>
                      <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.organization}</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase size={24} className="text-indigo-600 mr-2" />
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Experience</h3>
            </div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-indigo-600"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {experienceItems.map((item) => (
                  <div key={item.id} className="relative pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1.5 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className={`p-5 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <div className="flex flex-wrap justify-between mb-2">
                        <h4 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                        <span className="text-indigo-600 text-sm font-medium">{item.period}</span>
                      </div>
                      <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.organization}</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className={`text-2xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="text-indigo-600">Certifications</span> & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'TensorFlow Developer Certificate', issuer: 'Google', year: '2021' },
              { name: 'Deep Learning Specialization', issuer: 'Coursera/DeepLearning.AI', year: '2020' },
              { name: 'AWS Certified Machine Learning', issuer: 'Amazon Web Services', year: '2021' },
              { name: 'Kaggle Competition - Top 5%', issuer: 'Kaggle', year: '2022' },
              { name: 'Azure AI Engineer Associate', issuer: 'Microsoft', year: '2020' },
              { name: 'ML Ops Certification', issuer: 'Google Cloud', year: '2022' },
            ].map((cert, index) => (
              <div 
                key={index} 
                className={`p-5 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-transform hover:scale-105`}
              >
                <h4 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cert.name}</h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="text-indigo-600 font-medium">{cert.issuer}</span> • {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;