import React, { useState } from 'react';
import { Play, Download, BookOpen, FileText, ExternalLink, Filter } from 'lucide-react';

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState('videos');
  const [selectedClass, setSelectedClass] = useState('');

  const resources = {
    videos: [
      {
        id: 1,
        title: 'Class 12 Physics - Newton\'s Laws of Motion',
        description: 'Complete explanation of Newton\'s three laws with practical examples',
        duration: '45:30',
        views: '125K',
        thumbnail: 'https://images.pexels.com/photos/8617606/pexels-photo-8617606.jpeg?auto=compress&cs=tinysrgb&w=300',
        class: '12',
        subject: 'Physics'
      },
      {
        id: 2,
        title: 'Class 11 Mathematics - Calculus Basics',
        description: 'Introduction to differential and integral calculus',
        duration: '38:15',
        views: '89K',
        thumbnail: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=300',
        class: '11',
        subject: 'Mathematics'
      },
      {
        id: 3,
        title: 'Class 10 Computer Science - Programming Fundamentals',
        description: 'Learn the basics of programming with C++',
        duration: '52:45',
        views: '156K',
        thumbnail: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=300',
        class: '10',
        subject: 'Computer Science'
      }
    ],
    notes: [
      {
        id: 1,
        title: 'Class 12 Physics Complete Notes',
        description: 'Comprehensive notes covering all physics topics for Class 12',
        pages: 245,
        downloads: '2.3K',
        format: 'PDF',
        class: '12',
        subject: 'Physics'
      },
      {
        id: 2,
        title: 'Class 11 Math Formula Sheet',
        description: 'All important formulas and theorems for Class 11 Mathematics',
        pages: 45,
        downloads: '1.8K',
        format: 'PDF',
        class: '11',
        subject: 'Mathematics'
      },
      {
        id: 3,
        title: 'Class 10 English Grammar Guide',
        description: 'Complete grammar guide with examples and exercises',
        pages: 128,
        downloads: '3.1K',
        format: 'PDF',
        class: '10',
        subject: 'English'
      }
    ]
  };

  const filteredResources = resources[activeTab as keyof typeof resources].filter(
    resource => !selectedClass || resource.class === selectedClass
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Free Educational Resources</h2>
        
        {/* Tabs */}
        <div className="flex space-x-1 mb-6">
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'videos'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <Play className="w-4 h-4 inline mr-2" />
            Videos
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'notes'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            Notes & PDFs
          </button>
        </div>

        {/* Filter */}
        <div className="flex items-center space-x-4 mb-6">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">All Classes</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {activeTab === 'videos' ? (
              <>
                <div className="relative">
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {resource.duration}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-xs">
                      Class {resource.class}
                    </span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-xs">
                      {resource.subject}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{resource.views} views</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                      Watch Now
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-xs">
                    Class {resource.class}
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-xs">
                    {resource.subject}
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full text-xs">
                    {resource.format}
                  </span>
                </div>
                
                <div className="flex items-start space-x-3 mb-4">
                  <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{resource.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{resource.pages} pages</span>
                  <span>{resource.downloads} downloads</span>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Popular Resources Section */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Popular This Week</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'SEE Preparation Guide 2024', views: '45K', type: 'PDF' },
            { title: 'Class 12 Board Exam Tips', views: '38K', type: 'Video' },
            { title: 'Mathematics Shortcut Formulas', views: '52K', type: 'PDF' }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              {item.type === 'Video' ? (
                <Play className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              ) : (
                <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
              )}
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;