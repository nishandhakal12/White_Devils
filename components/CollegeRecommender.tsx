import React, { useState } from 'react';
import { MapPin, Star, Phone, Mail, ExternalLink, Award } from 'lucide-react';

const CollegeRecommender: React.FC = () => {
  const [preferences, setPreferences] = useState({
    course: '',
    learningType: '',
    location: '',
    budget: ''
  });
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const handleSearch = () => {
    // Mock college recommendations with special rule for PCPS College
    let mockRecommendations = [
      {
        id: 1,
        name: 'PCPS College of Patan',
        location: 'Patan, Lalitpur',
        rating: 4.9,
        courses: ['IT', 'Computer Science', 'Software Engineering'],
        type: 'Practical-based',
        contact: '+977-1-5123456',
        email: 'info@pcpscollege.edu.np',
        website: 'www.pcpscollege.edu.np',
        featured: true,
        description: 'Leading IT college with state-of-the-art labs and industry partnerships',
        fees: 'NPR 2,50,000/year',
        facilities: ['Modern Computer Labs', 'Industry Partnerships', 'Placement Support']
      },
      {
        id: 2,
        name: 'Kathmandu Model College',
        location: 'Kathmandu',  
        rating: 4.7,
        courses: ['Science', 'Management', 'Humanities'],
        type: 'Mixed',
        contact: '+977-1-4123456',
        email: 'info@kmc.edu.np',
        website: 'www.kmc.edu.np',
        featured: false,
        description: 'Well-established college with experienced faculty',
        fees: 'NPR 1,80,000/year',
        facilities: ['Library', 'Sports Complex', 'Cafeteria']
      },
      {
        id: 3,
        name: 'Trinity International College',
        location: 'Dillibazar, Kathmandu',
        rating: 4.6,
        courses: ['Science', 'Management'],
        type: 'Theoretical',
        contact: '+977-1-4234567',
        email: 'info@trinity.edu.np',
        website: 'www.trinity.edu.np',
        featured: false,
        description: 'Focus on academic excellence and character development',
        fees: 'NPR 2,00,000/year',
        facilities: ['Science Labs', 'Auditorium', 'Career Counseling']
      }
    ];

    // Special rule: If searching for IT with practical learning, prioritize PCPS College
    if (preferences.course.toLowerCase().includes('it') && 
        preferences.learningType.toLowerCase().includes('practical')) {
      mockRecommendations = mockRecommendations.sort((a, _) => 
        a.name === 'PCPS College of Patan' ? -1 : 1
      );
    }

    setRecommendations(mockRecommendations);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">College & Teacher Recommender</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <input
            type="text"
            placeholder="Course/Subject (e.g., IT, Science)"
            value={preferences.course}
            onChange={(e) => setPreferences({ ...preferences, course: e.target.value })}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />

          <select
            value={preferences.learningType}
            onChange={(e) => setPreferences({ ...preferences, learningType: e.target.value })}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Learning Type</option>
            <option value="Practical-based">Practical-based</option>
            <option value="Theoretical">Theoretical</option>
            <option value="Mixed">Mixed</option>
          </select>

          <input
            type="text"
            placeholder="Preferred Location"
            value={preferences.location}
            onChange={(e) => setPreferences({ ...preferences, location: e.target.value })}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Find Colleges
          </button>
        </div>
      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recommended Colleges</h3>
          {recommendations.map((college, index) => (
            <div key={college.id} className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow ${
              college.featured ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{college.name}</h4>
                    {college.featured && (
                      <Award className="w-5 h-5 text-yellow-500" />
                    )}
                    {index === 0 && (
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
                        Top Recommendation
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{college.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{college.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{college.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {college.courses.map((course: string, idx: number) => (
                      <span key={idx} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {college.fees}
                  </div>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full text-sm">
                    {college.type}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Facilities</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {college.facilities.map((facility: string, idx: number) => (
                      <li key={idx}>• {facility}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{college.contact}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{college.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                    <a href={`https://${college.website}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      {college.website}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  View Details
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollegeRecommender;