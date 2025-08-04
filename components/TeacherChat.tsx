import React, { useState } from 'react';
import { Send, Calendar, Clock, User, MessageCircle, Video } from 'lucide-react';

const TeacherChat: React.FC = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  const teachers = [
    {
      id: 1,
      name: 'Dr. Rajesh Sharma',
      subject: 'Physics',
      rating: 4.8,
      online: true,
      avatar: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=150',
      speciality: 'Mechanics, Thermodynamics'
    },
    {
      id: 2,
      name: 'Prof. Sita Devi',
      subject: 'Mathematics',
      rating: 4.6,
      online: false,
      avatar: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=150',
      speciality: 'Calculus, Algebra'
    },
    {
      id: 3,
      name: 'Mr. Amit Thapa',
      subject: 'Computer Science',
      rating: 4.9,
      online: true,
      avatar: 'https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=150',
      speciality: 'Programming, Data Structures'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim() && selectedTeacher) {
      const newMessage = {
        id: Date.now(),
        text: message,
        sender: 'student',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate teacher response
      setTimeout(() => {
        const teacherResponse = {
          id: Date.now() + 1,
          text: "Thank you for your question! I'll help you understand this concept. Let me break it down for you...",
          sender: 'teacher',
          timestamp: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, teacherResponse]);
      }, 1000);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">One-on-One Teacher Interaction</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Teachers List */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Available Teachers</h3>
            <div className="space-y-3">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  onClick={() => setSelectedTeacher(teacher)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedTeacher?.id === teacher.id
                      ? 'bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-600'
                      : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={teacher.avatar}
                        alt={teacher.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        teacher.online ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">{teacher.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{teacher.subject}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{teacher.speciality}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm text-yellow-500">★</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{teacher.rating}</span>
                      </div>
                      <span className={`text-xs ${teacher.online ? 'text-green-500' : 'text-gray-400'}`}>
                        {teacher.online ? 'Online' : 'Offline'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg h-96 flex flex-col">
            {selectedTeacher ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={selectedTeacher.avatar}
                        alt={selectedTeacher.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{selectedTeacher.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{selectedTeacher.subject}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                        <Video className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                        <Calendar className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto">
                  {messages.length === 0 ? (
                    <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
                      <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Start a conversation with {selectedTeacher.name}</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-xs px-4 py-2 rounded-lg ${
                            msg.sender === 'student'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                          }`}>
                            <p className="text-sm">{msg.text}</p>
                            <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder={`Ask ${selectedTeacher.name} a question...`}
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <div className="text-center">
                  <User className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Select a teacher to start chatting</p>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Schedule Session</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Book a one-on-one session with your teacher</p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
                <Calendar className="w-4 h-4 inline mr-2" />
                Schedule Now
              </button>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Quick Help</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Get instant answers to common questions</p>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg transition-colors">
                <MessageCircle className="w-4 h-4 inline mr-2" />
                Quick Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherChat;