import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, User } from 'lucide-react';

const CourseSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    learningType: '',
    subject: '',
    teachingStyle: '',
    class: ''
  });
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = () => {
    // Mock search results
    const mockResults = [
      {
        id: 1,
        title: 'Class 12 Physics - Mechanics',
        description: 'Comprehensive study of mechanics including laws of motion, energy, and momentum',
        teacher: 'Dr. Rajesh Sharma',
        rating: 4.8,
        duration: '45 hours',
        type: 'Practical-based',
        subject: 'Science'
      },
      {
        id: 2,
        title: 'Class 11 Mathematics - Calculus',
        description: 'Introduction to differential and integral calculus with practical applications',
        teacher: 'Prof. Sita Devi',
        rating: 4.6,
        duration: '38 hours',
        type: 'Theoretical',
        subject: 'Mathematics'
      },
      {
        id: 3,
        title: 'Class 10 Computer Science - Programming Basics',
        description: 'Learn fundamentals of programming with C++ and Python',
        teacher: 'Mr. Amit Thapa',
        rating: 4.9,
        duration: '52 hours',
        type: 'Practical-based',
        subject: 'IT'
      }
    ];
    setSearchResults(mockResults);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Course Search</h2>
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for courses, topics, or subjects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <select
            value={filters.class}
            onChange={(e) => setFilters({ ...filters, class: e.target.value })}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Select Class</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>

          <select
            value={filters.subject}
            onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Subject Focus</option>
            <option value="IT">IT</option>
            <option value="Science">Science</option>
            <option value="Management">Management</option>
            <option value="Mathematics">Mathematics</option>
          </select>

          <select
            value={filters.learningType}
            onChange={(e) => setFilters({ ...filters, learningType: e.target.value })}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Learning Type</option>
            <option value="Practical-based">Practical-based</option>
            <option value="Theoretical">Theoretical</option>
            <option value="Mixed">Mixed</option>
          </select>

          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Search Results</h3>
          {searchResults.map((result) => (
            <div key={result.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{result.title}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{result.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{result.rating}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">{result.description}</p>
              
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center space-x-4 text-sm">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
                    {result.type}
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded-full">
                    {result.subject}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 mt-2 md:mt-0">
                  <span className="text-sm text-gray-600 dark:text-gray-300">by {result.teacher}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseSearch;