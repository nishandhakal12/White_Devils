import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import CourseSearch from './components/CourseSearch';
import CollegeRecommender from './components/CollegeRecommender';
import TeacherChat from './components/TeacherChat';
import Resources from './components/Resources';
import CareerCounseling from './components/CareerCounseling';
import Feedback from './components/Feedback';
import QuizGame from './components/QuizGame';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [activeTab, setActiveTab] = useState('search');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'search':
        return <CourseSearch />;
      case 'colleges':
        return <CollegeRecommender />;
      case 'chat':
        return <TeacherChat />;
      case 'resources':
        return <Resources />;
      case 'counseling':
        return <CareerCounseling />;
      case 'feedback':
        return <Feedback />;
      case 'quiz':
        return <QuizGame />;
      default:
        return <CourseSearch />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="container mx-auto px-4 py-6">
          {renderActiveComponent()}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;