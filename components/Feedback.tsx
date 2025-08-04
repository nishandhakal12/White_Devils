import React, { useState } from 'react';
import { Star, Send, Heart, MessageSquare, ThumbsUp, User } from 'lucide-react';

const Feedback: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');

  const testimonials = [
    {
      id: 1,
      name: 'Aayush Sharma',
      class: 'Class 12',
      rating: 5,
      text: 'This app helped me find the perfect college for my IT studies. The recommendations were spot on!',
      avatar: 'https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Priya Gurung',
      class: 'Class 11',
      rating: 5,
      text: 'The career counseling session was amazing. I finally know what I want to do after +2!',
      avatar: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      name: 'Roshan Thapa',
      class: 'Class 10',
      rating: 4,
      text: 'Love the quiz games! They make learning fun and help me prepare for exams.',
      avatar: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 4,
      name: 'Sita Rai',
      class: 'Graduate',
      rating: 5,
      text: 'The free resources section saved my boards preparation. Thank you EduNepal!',
      avatar: 'https://images.pexels.com/photos/8471780/pexels-photo-8471780.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const handleSubmitFeedback = () => {
    if (rating > 0 && feedback.trim() && category) {
      alert('Thank you for your feedback! We appreciate your input and will use it to improve our app.');
      setRating(0);
      setFeedback('');
      setCategory('');
      setName('');
    }
  };

  const renderStars = (count: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 cursor-pointer transition-colors ${
          index < count
            ? 'text-yellow-500 fill-current'
            : 'text-gray-300 dark:text-gray-600'
        }`}
        onClick={interactive ? () => setRating(index + 1) : undefined}
        onMouseEnter={interactive ? () => setHoveredRating(index + 1) : undefined}
        onMouseLeave={interactive ? () => setHoveredRating(0) : undefined}
      />
    ));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feedback Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Share Your Feedback</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Your Name (Optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Rate Your Experience
              </label>
              <div className="flex space-x-1">
                {renderStars(hoveredRating || rating, true)}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {rating === 0 && 'Click to rate'}
                {rating === 1 && 'Poor'}
                {rating === 2 && 'Fair'}
                {rating === 3 && 'Good'}
                {rating === 4 && 'Very Good'}
                {rating === 5 && 'Excellent'}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Select a category</option>
                <option value="general">General Feedback</option>
                <option value="feature">Feature Request</option>
                <option value="bug">Bug Report</option>
                <option value="ui">User Interface</option>
                <option value="content">Content Quality</option>
                <option value="suggestion">Suggestion</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Your Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us about your experience, suggestions for improvement, or report any issues..."
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <button
              onClick={handleSubmitFeedback}
              disabled={!rating || !feedback.trim() || !category}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Feedback</span>
            </button>
          </div>
        </div>

        {/* Statistics & Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">App Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4.8</div>
                <div className="flex justify-center space-x-1 mb-1">
                  {renderStars(5)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">1,234</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Total Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">89%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">5,678</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Active Users</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Recommend to Friends</span>
              </button>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Join Community</span>
              </button>
              <button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <ThumbsUp className="w-4 h-4" />
                <span>Follow Updates</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">What Students Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.class}</p>
                    </div>
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 italic">"{testimonial.text}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Need Direct Support?</h3>
          <p className="mb-4">Our team is here to help you succeed in your educational journey</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>support@edunepal.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>•</span>
              <span>+977-1-4567890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;