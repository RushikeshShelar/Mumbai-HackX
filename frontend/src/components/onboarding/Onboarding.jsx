import React, { useState } from 'react';
import axios from 'axios'

const questions = [
  {
    question: "What is your preferred mode of transportation?",
    options: ["Car", "Bike", "Public Transport", "Walking"],
  },
  {
    question: "What type of cuisine do you prefer?",
    options: ["Italian", "Chinese", "Indian", "Mexican"],
  },
  {
    question: "What is your favorite hobby?",
    options: ["Reading", "Sports", "Music", "Traveling"],
  },
  {
    question: "What is your dream job?",
    options: ["Engineer", "Doctor", "Artist", "Scientist"],
  },
  {
    question: "What motivates you the most?",
    options: ["Money", "Passion", "Recognition", "Knowledge"],
  },
  {
    question: "What genres of movies do you enjoy?",
    options: ["Action", "Comedy", "Drama", "Horror"],
  },
  {
    question: "What is your preferred way to spend a vacation?",
    options: ["Beach", "Mountains", "City", "Countryside"],
  },
  {
    question: "What type of books do you prefer?",
    options: ["Fiction", "Non-Fiction", "Biography", "Science Fiction"],
  },
  {
    question: "What social media platform do you use the most?",
    options: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
  },
  {
    question: "What is your favorite season?",
    options: ["Spring", "Summer", "Fall", "Winter"],
  },
  {
    question: "What type of pets do you prefer?",
    options: ["Dogs", "Cats", "Birds", "No Pets"],
  },
  {
    question: "How often do you exercise?",
    options: ["Daily", "Weekly", "Monthly", "Rarely"],
  },
  {
    question: "What is your favorite music genre?",
    options: ["Rock", "Pop", "Jazz", "Classical"],
  },
  {
    question: "What type of art do you enjoy?",
    options: ["Painting", "Sculpture", "Photography", "None"],
  },
  {
    question: "What is your preferred method of learning?",
    options: ["Visual", "Auditory", "Kinesthetic", "Reading/Writing"],
  },
  {
    question: "How do you prefer to communicate?",
    options: ["In-person", "Phone", "Text", "Email"],
  },
  {
    question: "What is your biggest goal for the next year?",
    options: ["Career Advancement", "Personal Growth", "Travel", "Health"],
  },
  {
    question: "What is your favorite type of cuisine?",
    options: ["Italian", "Chinese", "Indian", "Mexican"],
  },
  {
    question: "What is your ideal work environment?",
    options: ["Remote", "Office", "Hybrid", "Flexible"],
  },
  {
    question: "What is your favorite outdoor activity?",
    options: ["Hiking", "Biking", "Running", "Swimming"],
  },
  {
    question: "How do you typically relax?",
    options: ["Reading", "Watching TV", "Meditating", "Exercising"],
  },
  {
    question: "What are your thoughts on remote work?",
    options: ["Very Positive", "Positive", "Neutral", "Negative"],
  },
  {
    question: "What is your favorite holiday?",
    options: ["Christmas", "New Year", "Thanksgiving", "Halloween"],
  },
  {
    question: "What is your preferred way to stay informed?",
    options: ["News Websites", "Social Media", "Podcasts", "TV"],
  },
  {
    question: "How do you prioritize tasks?",
    options: ["By Urgency", "By Importance", "Randomly", "Not Sure"],
  },
  {
    question: "What is your favorite way to celebrate achievements?",
    options: ["Party", "Gift to Self", "Dinner with Friends", "Quiet Reflection"],
  },
  {
    question: "What role do you prefer in a team?",
    options: ["Leader", "Contributor", "Supporter", "Independent"],
  },
  {
    question: "How do you handle stress?",
    options: ["Exercise", "Meditation", "Talking to Friends", "Ignoring it"],
  },
  {
    question: "What is your favorite type of dessert?",
    options: ["Cake", "Ice Cream", "Pie", "Cookies"],
  },
  {
    question: "What kind of technology do you prefer?",
    options: ["Apple", "Android", "Windows", "Linux"],
  },
  {
    question: "What is your favorite type of game?",
    options: ["Video Games", "Board Games", "Card Games", "Outdoor Games"],
  },
  {
    question: "What is your preferred method of transportation?",
    options: ["Car", "Public Transit", "Bicycle", "Walking"],
  },
  {
    question: "What is your favorite way to spend free time?",
    options: ["Hobbies", "Watching Movies", "Spending Time with Family", "Traveling"],
  },
  {
    question: "How do you feel about volunteering?",
    options: ["Very Important", "Important", "Neutral", "Not Important"],
  },
  {
    question: "What is your favorite beverage?",
    options: ["Coffee", "Tea", "Juice", "Water"],
  },
  {
    question: "What is your favorite beverage?",
    options: ["Coffee", "Tea", "Juice", "Water"],
  },

  // User Input Questions

  {
    question: "What skills do you want to improve?",
    input: true,
  },
  {
    question: "What skills do you want to learn?",
    input: true,
  },
  {
    question: "What skills do you want to explore?",
    input: true,
  },
  {
    question: "What are your personal goals for the next year?",
    input: true,
  },
];

function Onboarding() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleOptionChange = (option, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = option;
    setAnswers(updatedAnswers);
  };

  const handleInputChange = (event, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = event.target.value;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, 7)); // Allow navigation to the user input page
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const startQuestionIndex = currentPage * 6; // 7 questions per page for the first 5 pages

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-10 rounded shadow-lg w-full max-w-full h-[95vh] overflow-y-auto">

        {currentPage < 6 ? (
          // MCQ Pages
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions.slice(startQuestionIndex, startQuestionIndex + 6).map((question, index) => (
              <div key={index} className="mb-4">
                <p className="mb-2">{question.question}</p>
                {question.options && (
                  <div>
                    {question.options.map((option) => (
                      <div key={option} className="flex items-center mb-2">
                        <input
                          type="radio"
                          id={`question-${startQuestionIndex + index}-${option}`}
                          name={`question-${startQuestionIndex + index}`}
                          value={option}
                          checked={answers[startQuestionIndex + index] === option}
                          onChange={() => handleOptionChange(option, startQuestionIndex + index)}
                          className="mr-2"
                        />
                        <label htmlFor={`question-${startQuestionIndex + index}-${option}`} className="text-gray-700">{option}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          // User Input Page
          <div className="flex flex-col">
            {questions.slice(36).map((question, index) => (
              <div key={index} className="mb-4">
                <p className="mb-2">{question.question}</p>
                <input
                  type="text"
                  value={answers[36 + index]}
                  onChange={(e) => handleInputChange(e, 36 + index)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your answer"
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            disabled={currentPage >= 7} // Disable if on the last page
          >
            {currentPage === 6 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;