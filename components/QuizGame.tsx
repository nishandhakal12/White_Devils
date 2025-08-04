import React, { useState, useEffect } from 'react';
import { Play, Trophy, Clock, CheckCircle, XCircle, RotateCcw, Share2, Star } from 'lucide-react';

const QuizGame: React.FC = () => {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'finished'>('menu');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [difficulty, setDifficulty] = useState('medium');

  const subjects = [
    { id: 'physics', name: 'Physics', icon: '⚛️' },
    { id: 'chemistry', name: 'Chemistry', icon: '🧪' },
    { id: 'mathematics', name: 'Mathematics', icon: '📐' },
    { id: 'biology', name: 'Biology', icon: '🧬' },
    { id: 'computer', name: 'Computer Science', icon: '💻' },
    { id: 'english', name: 'English', icon: '📚' }
  ];

  const quizQuestions = {
    physics: [
      {
        question: "What is the SI unit of force?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        correct: 0,
        explanation: "Newton (N) is the SI unit of force, named after Sir Isaac Newton."
      },
      {
        question: "The acceleration due to gravity on Earth is approximately:",
        options: ["9.8 m/s²", "8.9 m/s²", "10.2 m/s²", "9.0 m/s²"],
        correct: 0,
        explanation: "The standard acceleration due to gravity is 9.8 m/s² or approximately 10 m/s²."
      },
      {
        question: "Which law states that every action has an equal and opposite reaction?",
        options: ["First Law", "Second Law", "Third Law", "Fourth Law"],
        correct: 2,
        explanation: "Newton's Third Law states that for every action, there is an equal and opposite reaction."
      }
    ],
    mathematics: [
      {
        question: "What is the derivative of x²?",
        options: ["x", "2x", "x²", "2x²"],
        correct: 1,
        explanation: "The derivative of x² is 2x using the power rule."
      },
      {
        question: "What is the value of π (pi) approximately?",
        options: ["3.14", "3.41", "3.12", "3.21"],
        correct: 0,
        explanation: "π (pi) is approximately 3.14159, commonly rounded to 3.14."
      }
    ]
    
  };

  const getCurrentQuestions = () => {
    return quizQuestions[selectedSubject as keyof typeof quizQuestions] || [];
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (gameState === 'playing' && timeLeft > 0 && !showAnswer) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && !showAnswer) {
      setShowAnswer(true);
      setTimeout(() => {
        nextQuestion();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [gameState, timeLeft, showAnswer]);

  const startQuiz = () => {
    if (!selectedSubject) return;
    setGameState('playing');
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowAnswer(false);
  };

  const selectAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null || showAnswer) return;
    
    setSelectedAnswer(answerIndex);
    setShowAnswer(true);
    
    const questions = getCurrentQuestions();
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      nextQuestion();
    }, 3000);
  };

  const nextQuestion = () => {
    const questions = getCurrentQuestions();
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
      setTimeLeft(30);
    } else {
      setGameState('finished');
    }
  };

  const resetQuiz = () => {
    setGameState('menu');
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setSelectedSubject('');
  };

  const shareScore = () => {
    const questions = getCurrentQuestions();
    const percentage = Math.round((score / questions.length) * 100);
    alert(`I scored ${score}/${questions.length} (${percentage}%) in ${selectedSubject} quiz on EduNepal! 🎉`);
  };

  if (gameState === 'menu') {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Quiz Game</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Test your knowledge and have fun learning!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                onClick={() => setSelectedSubject(subject.id)}
                className={`p-6 rounded-lg cursor-pointer transition-all hover:scale-105 ${
                  selectedSubject === subject.id
                    ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 dark:border-blue-400'
                    : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{subject.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{subject.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Difficulty Level</h3>
            <div className="flex space-x-4">
              {['easy', 'medium', 'hard'].map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                    difficulty === level
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={startQuiz}
              disabled={!selectedSubject}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto"
            >
              <Play className="w-5 h-5" />
              <span>Start Quiz</span>
            </button>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent High Scores</h3>
          <div className="space-y-3">
            {[
              { name: 'Aayush S.', subject: 'Physics', score: '8/10', percentage: 80 },
              { name: 'Priya G.', subject: 'Mathematics', score: '9/10', percentage: 90 },
              { name: 'Roshan T.', subject: 'Chemistry', score: '7/10', percentage: 70 },
              { name: 'Sita R.', subject: 'Biology', score: '10/10', percentage: 100 }
            ].map((entry, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-500' : 'bg-blue-500'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{entry.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{entry.subject}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900 dark:text-white">{entry.score}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{entry.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'playing') {
    const questions = getCurrentQuestions();
    const question = questions[currentQuestion];

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">{selectedSubject} Quiz</h2>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                {currentQuestion + 1} / {questions.length}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-900 dark:text-white">{score}</span>
              </div>
              <div className={`flex items-center space-x-2 ${timeLeft <= 10 ? 'text-red-500' : ''}`}>
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{timeLeft}s</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-8">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{question.question}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(index)}
                  disabled={showAnswer}
                  className={`p-4 rounded-lg text-left transition-all border-2 ${
                    showAnswer
                      ? index === question.correct
                        ? 'bg-green-100 dark:bg-green-900 border-green-500 text-green-800 dark:text-green-300'
                        : selectedAnswer === index
                        ? 'bg-red-100 dark:bg-red-900 border-red-500 text-red-800 dark:text-red-300'
                        : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400'
                      : 'bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                      showAnswer && index === question.correct
                        ? 'bg-green-500 border-green-500 text-white'
                        : showAnswer && selectedAnswer === index && index !== question.correct
                        ? 'bg-red-500 border-red-500 text-white'
                        : 'border-gray-400 dark:border-gray-500'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span>{option}</span>
                    {showAnswer && index === question.correct && (
                      <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                    )}
                    {showAnswer && selectedAnswer === index && index !== question.correct && (
                      <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Explanation */}
          {showAnswer && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Explanation:</h4>
              <p className="text-blue-800 dark:text-blue-300">{question.explanation}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (gameState === 'finished') {
    const questions = getCurrentQuestions();
    const percentage = Math.round((score / questions.length) * 100);
    const getGrade = () => {
      if (percentage >= 90) return { grade: 'A+', color: 'text-green-600', message: 'Outstanding!' };
      if (percentage >= 80) return { grade: 'A', color: 'text-green-500', message: 'Excellent!' };
      if (percentage >= 70) return { grade: 'B', color: 'text-blue-500', message: 'Good job!' };
      if (percentage >= 60) return { grade: 'C', color: 'text-yellow-500', message: 'Keep practicing!' };
      return { grade: 'D', color: 'text-red-500', message: 'Need more study!' };
    };

    const result = getGrade();

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
          <div className="mb-8">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Quiz Complete!</h2>
            <p className="text-gray-600 dark:text-gray-300">Great job on completing the {selectedSubject} quiz!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{score}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Correct Answers</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{percentage}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Accuracy</div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
              <div className={`text-3xl font-bold ${result.color}`}>{result.grade}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Grade</div>
            </div>
          </div>

          <div className="mb-8">
            <div className={`text-xl font-semibold ${result.color} mb-2`}>{result.message}</div>
            <div className="flex justify-center space-x-1">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  className={`w-6 h-6 ${
                    index < Math.ceil(percentage / 20)
                      ? 'text-yellow-500 fill-current'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={shareScore}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Score</span>
            </button>
            <button
              onClick={startQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
            <button
              onClick={resetQuiz}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              New Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default QuizGame;