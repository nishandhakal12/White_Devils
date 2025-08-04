import React, { useState } from 'react';
import { Calendar, User, Heart, MessageSquare, Video, CheckCircle } from 'lucide-react';

const CareerCounseling: React.FC = () => {
  const [activeTab, setActiveTab] = useState('guidance');
  const [selectedCounselor, setSelectedCounselor] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    interests: '',
    concerns: '',
    preferredTime: ''
  });

  const counselors = [
    {
      id: 1,
      name: 'Dr. Meera Joshi',
      speciality: 'Career Psychology',
      experience: '12 years',
      rating: 4.9,
      available: true,
      avatar: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150',
      expertise: ['Career Planning', 'Academic Guidance', 'Skill Assessment']
    },
    {
      id: 2,
      name: 'Mr. Ramesh Adhikari',
      speciality: 'Educational Counseling',
      experience: '8 years',
      rating: 4.7,
      available: false,
      avatar: 'https://images.pexels.com/photos/4427622/pexels-photo-4427622.jpeg?auto=compress&cs=tinysrgb&w=150',
      expertise: ['Study Planning', 'Exam Stress', 'Subject Selection']
    },
    {
      id: 3,
      name: 'Ms. Sapana Thapa',
      speciality: 'Life Coach',
      experience: '10 years',
      rating: 4.8,
      available: true,
      avatar: 'https://images.pexels.com/photos/8471780/pexels-photo-8471780.jpeg?auto=compress&cs=tinysrgb&w=150',
      expertise: ['Goal Setting', 'Motivation', 'Personal Development']
    }
  ];

  const careerPaths = [
    {
      field: 'Engineering',
      description: 'Build and design solutions for tomorrow',
      requirements: 'Strong in Math & Physics',
      colleges: ['IOE', 'Kathmandu University', 'Pokhara University'],
      salary: 'NPR 30,000 - 80,000/month'
    },
    {
      field: 'Medicine',
      description: 'Heal and help people live better lives',
      requirements: 'Strong in Biology & Chemistry',
      colleges: ['BPKIHS', 'IOM', 'KIST Medical College'],
      salary: 'NPR 50,000 - 150,000/month'
    },
    {
      field: 'Information Technology',
      description: 'Shape the digital future',
      requirements: 'Logical thinking & Problem solving',
      colleges: ['PCPS College', 'Deerwalk Institute', 'Herald College', 'IOST' ],
      salary: 'NPR 25,000 - 100,000/month'
    },
    {
      field: 'Business & Management',
      description: 'Lead organizations and create value',
      requirements: 'Communication & Leadership skills',
      colleges: ['Ace Institute', 'KMC', 'Global College'],
      salary: 'NPR 20,000 - 75,000/month'
    }
  ];

  const handleBooking = () => {
    if (selectedCounselor && formData.name && formData.class) {
      alert(`Booking confirmed with ${selectedCounselor.name}! You will receive a confirmation email shortly.`);
      setFormData({ name: '', class: '', interests: '', concerns: '', preferredTime: '' });
      setSelectedCounselor(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Career Counseling</h2>
        
        {/* Tabs */}
        <div className="flex space-x-1 mb-6">
          <button
            onClick={() => setActiveTab('guidance')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'guidance'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <Heart className="w-4 h-4 inline mr-2" />
            Career Guidance
          </button>
          <button
            onClick={() => setActiveTab('booking')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'booking'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Book Session
          </button>
        </div>
      </div>

      {activeTab === 'guidance' ? (
        <div className="space-y-6">
          {/* Career Paths */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Popular Career Paths in Nepal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerPaths.map((career, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{career.field}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{career.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Requirements: </span>
                      <span className="text-gray-600 dark:text-gray-300">{career.requirements}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Top Colleges: </span>
                      <span className="text-gray-600 dark:text-gray-300">{career.colleges.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Expected Salary: </span>
                      <span className="text-green-600 dark:text-green-400">{career.salary}</span>
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Assessment */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Career Assessment</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Take our 5-minute assessment to discover career paths that match your interests and strengths.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900 dark:text-white">Interest Analysis</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Discover what you love</p>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900 dark:text-white">Skill Evaluation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Identify your strengths</p>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <CheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900 dark:text-white">Career Match</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Find perfect careers</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
              Start Assessment
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Counselors */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Counselors</h3>
              <div className="space-y-4">
                {counselors.map((counselor) => (
                  <div
                    key={counselor.id}
                    onClick={() => setSelectedCounselor(counselor)}
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedCounselor?.id === counselor.id
                        ? 'bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-600'
                        : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="relative">
                        <img
                          src={counselor.avatar}
                          alt={counselor.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                          counselor.available ? 'bg-green-500' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{counselor.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{counselor.speciality}</p>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <span className="font-medium">Experience:</span> {counselor.experience}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm text-yellow-500">★</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{counselor.rating}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        counselor.available 
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}>
                        {counselor.available ? 'Available' : 'Busy'}
                      </span>
                    </div>
                    
                    <div className="mt-3">
                      <div className="flex flex-wrap gap-1">
                        {counselor.expertise.slice(0, 2).map((skill, idx) => (
                          <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              {selectedCounselor ? (
                <>
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={selectedCounselor.avatar}
                      alt={selectedCounselor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedCounselor.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{selectedCounselor.speciality}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-600 dark:text-gray-300">{selectedCounselor.experience} experience</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm text-yellow-500">★</span>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{selectedCounselor.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                      <select
                        value={formData.class}
                        onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="">Select Your Class</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                        <option value="graduate">Graduate</option>
                      </select>
                    </div>
                    
                    <textarea
                      placeholder="What are your interests and hobbies?"
                      value={formData.interests}
                      onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    
                    <textarea
                      placeholder="What concerns or questions do you have about your career?"
                      value={formData.concerns}
                      onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Preferred Time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (1 PM - 5 PM)</option>
                      <option value="evening">Evening (6 PM - 8 PM)</option>
                    </select>
                  </form>

                  <div className="mt-6 flex space-x-3">
                    <button
                      onClick={handleBooking}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Session</span>
                    </button>
                    <button className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                    <button className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                      <Video className="w-4 h-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Select a Counselor</h3>
                  <p className="text-gray-600 dark:text-gray-300">Choose a counselor from the list to book your session</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerCounseling;