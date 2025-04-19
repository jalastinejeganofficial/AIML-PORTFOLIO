import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ContactSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    { icon: <Mail size={24} />, title: 'Email', content: 'contact@example.com' },
    { icon: <Phone size={24} />, title: 'Phone', content: '+1 (555) 123-4567' },
    { icon: <MapPin size={24} />, title: 'Location', content: 'San Francisco, CA' },
  ];

  return (
    <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Get in <span className="text-indigo-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Have a project in mind or want to discuss potential collaborations? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-white'} flex flex-col items-center text-center transition-transform hover:scale-105`}
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600">
                    {item.icon}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.content}</p>
                </div>
              ))}
            </div>

            <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Schedule a Meeting</h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Want to discuss a project or opportunity? Schedule a virtual meeting at your convenience.
              </p>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>

          <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md ${
                    isDarkMode 
                      ? 'bg-gray-800 text-white border border-gray-600 focus:border-indigo-500' 
                      : 'bg-gray-50 text-gray-900 border border-gray-300 focus:border-indigo-500'
                  } focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                  required 
                />
              </div>
              <div className="mb-4">
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md ${
                    isDarkMode 
                      ? 'bg-gray-800 text-white border border-gray-600 focus:border-indigo-500' 
                      : 'bg-gray-50 text-gray-900 border border-gray-300 focus:border-indigo-500'
                  } focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                  required 
                />
              </div>
              <div className="mb-4">
                <label 
                  htmlFor="subject" 
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md ${
                    isDarkMode 
                      ? 'bg-gray-800 text-white border border-gray-600 focus:border-indigo-500' 
                      : 'bg-gray-50 text-gray-900 border border-gray-300 focus:border-indigo-500'
                  } focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                  required 
                />
              </div>
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md ${
                    isDarkMode 
                      ? 'bg-gray-800 text-white border border-gray-600 focus:border-indigo-500' 
                      : 'bg-gray-50 text-gray-900 border border-gray-300 focus:border-indigo-500'
                  } focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                  required 
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;